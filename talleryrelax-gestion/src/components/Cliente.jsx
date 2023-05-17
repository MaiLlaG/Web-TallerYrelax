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

    const actualizarCliente = () => {
        ClienteDataService.update(actualCliente.id, actualCliente)
            .then(response => {
                console.log(response.data);
                setMessage("La información del cliente fue actualizada correctamente");
            })
            .catch(e => {
                console.log(e);
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
                                type="text"
                                className="form-control"
                                id="nombre"
                                name="nombre"
                                value={actualCliente.nombre}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="apellido">Apellido</label>
                            <input
                                type="text"
                                className="form-control"
                                id="apellido"
                                name="apellido"
                                value={actualCliente.apellido}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                value={actualCliente.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefono">Teléfono</label>
                            <input
                                type="text"
                                className="form-control"
                                id="telefono"
                                name="telefono"
                                value={actualCliente.telefono}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="text"
                                className="form-control"
                                id="password"
                                name="password"
                                value={actualCliente.password}
                                onChange={handleInputChange}
                            />
                        </div>
                    </form>

                    <button
                        type="submit"
                        className="btn btn-success" 
                        onClick={eliminarCliente}>
                        <span>Eliminar</span>
                    </button>

                    <button
                        type="submit"
                        className="btn btn-success" 
                        onClick={actualizarCliente}>
                        <span>Actualizar</span>
                    </button>

                    <Link
                        to={"/clientes"} className="btn btn-success">
                        Volver
                    </Link>

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