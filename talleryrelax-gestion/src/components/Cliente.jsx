import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import ClienteDataService from "../services/ClienteDataService";
import '../App.css';
import '../index.css';
import Alert from "./Alert";

const Cliente = () => {
    const { id } = useParams();
    let navigate = useNavigate();

    const clienteState = {
        id: null,
        nombre: "",
        email: "",
    };

    const [actualCliente, setActualCliente] = useState(clienteState);
    const [message, setMessage] = useState("");
    const [errores, setErrores] = useState({});// Validaciones: Errores
    const [alertText, setAlertText] = useState("");

    // Validaciones: Comprobar errores al cambiar el estado
    const setActualClienteConValidacion = elCliente => {
        setActualCliente(elCliente);
        validarFormulario(elCliente);
    };

    const validarFormulario = elCliente => {
        const errores = {};
        let hayErrores = false;

        console.log("Validando...");
        console.log(elCliente);

        if (estaVacio(elCliente.nombre)) {
            errores.nombre = 'Es obligatorio especificar un nombre';
            hayErrores = true;
        }

        if (noEsEmail(elCliente.email)) {
            errores.email = 'Es obligatorio especificar un email válido';
            hayErrores = true;
        }

        setErrores(errores);
        return hayErrores;
    };
    const noEsEmail = valor => {
        return (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(valor));
    }
    const noEsTelefono = valor => {
        return (!/^[0-9]{9}$/.test(valor));
    }    
    const estaVacio = valor => {
        return (valor == null || valor.trim() === '');
    }

    const getCliente = id => {
        ClienteDataService.get(id)
            .then(response => {
                setActualCliente(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        if (id)
            getCliente(id);
    }, [id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setActualClienteConValidacion({ ...actualCliente, [name]: value });
    };

    const enviarCliente = () => {
        // Validaciones: Si hay errores no dejo enviar
        if (validarFormulario(actualCliente)) {
            console.log('Formulario no válido');
            setAlertText('Corrige los errores antes de enviar');
            //alert('Corrige los errores antes de enviar');
            return;
        }

        console.log(actualCliente);
        if (actualCliente.id > 0) {
            actualizarCliente();
        } else {
            crearCliente();
        }
    }

    const crearCliente = () => {
        ClienteDataService.create(actualCliente)
            .then(response => {
                console.log(response.data);
                setMessage("El cliente fue añadido correctamente");
                getCliente(response.data.id);
            })
            .catch(e => {
                console.log(e);
                setMessage("Se ha producido un error: " + e);
            });
    };

    const actualizarCliente = () => {
        ClienteDataService.update(actualCliente.id, actualCliente)
            .then(response => {
                console.log(response.data);
                setMessage("La información del cliente fue actualizada correctamente");
                getCliente(id);
            })
            .catch(e => {
                console.log(e);
                setMessage("Se ha producido un error: " + e);
            });
    };

    const eliminarCliente = () => {
        ClienteDataService.remove(actualCliente.id)
            .then(response => {
                console.log(response.data);
                navigate("/clientes");
            })
            .catch(e => {
                console.log(e);
                setMessage("Se ha producido un error: " + e);
            });
    };

    return (
        <main className="bg-white winter-neva-gradient color-block p-0">
            <Alert alertText={alertText} setAlertText={setAlertText} />
            <div className="min-height-85">
                {actualCliente ? (
                    <div className="form p-3">
                        <form>
                            <div className="form-group d-flex flex-wrap flex-column align-content-center mt-1 p-3">
                                <h4 className="max-w-35 w-40 font-Raleway letter-spacing-2 fs-4 fw-bold mb-4">Cliente</h4>
                                <div className="form-group my-3">
                                    <label className="font-Raleway-bold letter-spacing-2" htmlFor="nombre">Nombre</label>
                                    <input
                                        className="form-control input-padding font-Raleway"
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        value={actualCliente.nombre}
                                        onChange={handleInputChange}
                                    />
                                    {errores.nombre && <span className="text-danger text-valida fw-light">{errores.nombre}</span>}
                                </div>
                                <div className="form-group my-3">
                                    <label className="font-Raleway-bold letter-spacing-2" htmlFor="email">Email</label>
                                    <input
                                        className="form-control input-padding font-Raleway"
                                        type="text"
                                        id="email"
                                        name="email"
                                        value={actualCliente.email}
                                        onChange={handleInputChange}
                                    />
                                    {errores.email && <span className="text-danger text-valida fw-light">{errores.email}</span>}
                                </div>

                                <p>{message}</p>

                                <button
                                    className="btn btn-primary border-dark mt-2 mb-3 rounded-0 min-w-bt-27"
                                    type="button"
                                    onClick={enviarCliente}>
                                    {actualCliente.id > 0 ?
                                        <span className="font-Raleway letter-spacing-2">Actualizar</span>
                                        :
                                        <span className="font-Raleway letter-spacing-2">Añadir</span>
                                    }
                                </button>

                                {actualCliente.id > 0 ?
                                    <button
                                        className="btn btn-dark border-white mt-2 mb-3 rounded-0 min-w-bt-27"
                                        type="button"
                                        onClick={eliminarCliente}>
                                        <span className="font-Raleway letter-spacing-2">Eliminar</span>
                                    </button>
                                    :
                                    <span></span>
                                }

                                <Link
                                    to={"/clientes"}
                                    className="btn btn-outline-light border-dark text-black mt-2 mb-3 rounded-0 min-w-bt-27">
                                    <span className="font-Raleway-bold letter-spacing-2">Volver</span>
                                </Link>

                            </div>
                        </form>
                    </div>
                ) : (
                    <div>
                        <p className="font-Raleway letter-spacing-2 fw-bold">Haz click en un cliente...</p>
                    </div>
                )}
            </div>
        </main>
    );



};

export default Cliente;