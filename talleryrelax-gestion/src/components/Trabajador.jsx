import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import TrabajadorDataService from "../services/TrabajadorDataService";
import '../App.css';
import '../index.css';

const Trabajador = () => {
    const { id } = useParams();
    let navigate = useNavigate();

    const trabajadorState = {
        id: null,
        nombre: "",
        email: "",
        puesto: ""
    };

    const [actualTrabajador, setActualTrabajador] = useState(trabajadorState);
    const [message, setMessage] = useState("");
    const [errores, setErrores] = useState({});// Validaciones: Errores

    // Validaciones: Comprobar errores al cambiar el estado
    const setActualTrabajadorConValidacion = elTaller => {
        setActualTrabajador(elTaller);

        const errores = {};

        console.log("Validando...");
        console.log(elTaller);


        if (elTaller.nombre.trim() === '') {
            errores.nombre = 'Es obligatorio especificar un nombre';
        }

        if (elTaller.email.trim() === '') {
            errores.email = 'Es obligatorio especificar un email';
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            errores.email = 'El email ingresado no es válido';
        }

        if (elTaller.puesto.trim() === '') {
            errores.puesto = 'Es obligatorio especificar un puesto';
        }

        setErrores(errores);
    };

    const getTrabajador = id => {
        TrabajadorDataService.get(id)
            .then(response => {
                setActualTrabajadorConValidacion(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        if (id)
            getTrabajador(id);
    }, [id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setActualTrabajadorConValidacion({ ...actualTrabajador, [name]: value });
    };

    const enviarTrabajador = () => {
        // Validaciones: Si hay errores no dejo enviar
        if (Object.keys(errores).length > 0) {
            console.log('Formulario no válido');
            alert('Corrige los errores antes de enviar');
            return;
        }

        console.log(actualTrabajador);
        if (actualTrabajador.id > 0) {
            actualizarTrabajador();
        } else {
            crearTrabajador();
        }
    }

    const crearTrabajador = () => {
        TrabajadorDataService.create(actualTrabajador)
            .then(response => {
                console.log(response.data);
                setMessage("El trabajador fue añadido correctamente");
                getTrabajador(response.data.id);
            })
            .catch(e => {
                console.log(e);
                setMessage("Se ha producido un error: " + e);
            });
    };

    const actualizarTrabajador = () => {
        TrabajadorDataService.update(actualTrabajador.id, actualTrabajador)
            .then(response => {
                console.log(response.data);
                setMessage("La información del trabajador fue actualizada correctamente");
                getTrabajador(id);
            })
            .catch(e => {
                console.log(e);
                setMessage("Se ha producido un error: " + e);
            });
    };

    const eliminarTrabajador = () => {
        TrabajadorDataService.remove(actualTrabajador.id)
            .then(response => {
                console.log(response.data);
                navigate("/trabajadores");
            })
            .catch(e => {
                console.log(e);
                setMessage("Se ha producido un error: " + e);
            });
    };

    return (
        <main className="bg-white winter-neva-gradient color-block p-0">
            <div className="min-height-85">
                {actualTrabajador ? (
                    <div className="form p-3">
                        <form>
                            <div className="form-group d-flex flex-wrap flex-column align-content-center mt-1 p-3">
                                <h4 className="max-w-35 w-40 font-Raleway letter-spacing-2 fs-4 fw-bold mb-4">Trabajador</h4>
                                <div className="form-group my-3">
                                    <label className="font-Raleway-bold letter-spacing-2" htmlFor="nombre">Nombre</label>
                                    <input
                                        className="form-control input-padding font-Raleway"
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        value={actualTrabajador.nombre}
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
                                        value={actualTrabajador.email}
                                        onChange={handleInputChange}
                                    />
                                    {errores.email && <span className="text-danger text-valida fw-light">{errores.email}</span>}
                                </div>
                                <div className="form-group my-3">
                                    <label className="font-Raleway-bold letter-spacing-2" htmlFor="puesto">Puesto</label>
                                    <input
                                        className="form-control input-padding font-Raleway"
                                        type="text"
                                        id="puesto"
                                        name="puesto"
                                        value={actualTrabajador.puesto}
                                        onChange={handleInputChange}
                                    />
                                    {errores.puesto && <span className="text-danger text-valida fw-light">{errores.puesto}</span>}
                                </div>

                                <p>{message}</p>

                                <button
                                    className="btn btn-primary border-dark mt-2 mb-3 rounded-0 min-w-bt-27"
                                    type="submit"
                                    onClick={enviarTrabajador}>
                                    {actualTrabajador.id > 0 ?
                                        <span className="font-Raleway letter-spacing-2">Actualizar</span>
                                        :
                                        <span className="font-Raleway letter-spacing-2">Añadir</span>
                                    }
                                </button>

                                {actualTrabajador.id > 0 ?
                                    <button
                                        className="btn btn-dark border-white mt-2 mb-3 rounded-0 min-w-bt-27"
                                        type="submit"
                                        onClick={eliminarTrabajador}>
                                        <span className="font-Raleway letter-spacing-2">Eliminar</span>
                                    </button>
                                    :
                                    <span></span>
                                }

                                <Link
                                    to={"/trabajadores"} 
                                    className="btn btn-outline-light border-dark text-black mt-2 mb-3 rounded-0 min-w-bt-27">
                                    <span className="font-Raleway-bold letter-spacing-2">Volver</span>
                                </Link>

                            </div>
                        </form>
                    </div>
                ) : (
                    <div>
                        <p className="font-Raleway letter-spacing-2 fw-bold">Haz click en un trabajador...</p>
                    </div>
                )}
            </div>
        </main>
    );


};

export default Trabajador;