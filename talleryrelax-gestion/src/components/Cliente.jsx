import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import ClienteDataService from "../services/ClienteDataService";
import '../App.css';
import '../index.css';
import '../views/Cliente.css';

const Cliente = () => {
    const { id } = useParams();
    let navigate = useNavigate();

    const clienteState = {
        id: null,
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        password: "",
        //submitted: false
    };

    const [actualCliente, setActualCliente] = useState(clienteState);
    const [message, setMessage] = useState("");

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
        setActualCliente({ ...actualCliente, [name]: value });
    };

    const enviarCliente = () => {
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
        <div className="min-height-85">
            {actualCliente ? (
                <div className="edit-form">
                    <h4>Cliente</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                className="form-control"
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={actualCliente.nombre}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="apellido">Apellido</label>
                            <input
                                className="form-control"
                                type="text"
                                id="apellido"
                                name="apellido"
                                value={actualCliente.apellido}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                className="form-control"
                                type="text"
                                id="email"
                                name="email"
                                value={actualCliente.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefono">Teléfono</label>
                            <input
                                className="form-control"
                                type="text"
                                id="telefono"
                                name="telefono"
                                value={actualCliente.telefono}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                className="form-control"
                                type="text"
                                id="password"
                                name="password"
                                value={actualCliente.password}
                                onChange={handleInputChange}
                            />
                        </div>

            

                        <Link
                            to={"/clientes"} className="btn btn-muted font-500 border border-dark rounded-0 p-2 mt-4 mb-3 w-bt-47">
                            <span className="text-decoration-underline">Volver</span>
                        </Link>
                    </form>

                    {actualCliente.id > 0 ?
                        <button
                            className="btn btn-primary font-500 rounded-0 p-2 mt-3 mb-3 w-bt-47"
                            type="submit"
                            onClick={eliminarCliente}>
                            <span>Eliminar</span>
                        </button>
                        :
                        <span></span>
                    }

                    <button
                        className="btn btn-primary font-500 rounded-0 p-2 mt-3 mb-3 w-bt-47"
                        type="submit"
                        onClick={enviarCliente}>
                        {actualCliente.id > 0 ?
                            <span>Actualizar</span>
                            :
                            <span>Añadir</span>
                        }
                    </button>

                    <p>{message}</p>
                </div>
            ) : (
                <div>
                    <br />
                    <p>Haz click en un cliente...</p>
                </div>
            )}
        </div>
    );



};

export default Cliente;