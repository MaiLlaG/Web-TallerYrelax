import React, { useState } from "react";
import { Link } from "react-router-dom";
import ClienteDataService from "../services/ClienteDataService";
import '../App.css';
import '../index.css';
import '../views/ClienteAdd.css';

const ClienteAdd = () => {
    const clienteState = {
        id: null,
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        password: "",
        //submitted: false
    };

    const [cliente, setCliente] = useState(clienteState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCliente({ ...cliente, [name]: value });
    };

    const salvarCliente = () => {
        var data = {
            nombre: cliente.nombre,
            apellido: cliente.apellido,
            email: cliente.email,
            telefono: cliente.telefono,
            password: cliente.password,
        };

        ClienteDataService.create(data)
            .then(response => {
                setCliente({
                    id: response.data.id,
                    nombre: response.data.nombre,
                    apellido: response.data.apellido,
                    email: response.data.email,
                    telefono: response.data.telefono,
                    password: response.data.password,
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const nuevoCliente = () => {
        setCliente(clienteState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form min-height-85">
            {submitted ? (
                <div>
                    <h4>Añadido correctamente</h4>
                    <button className="btn btn-success" onClick={nuevoCliente}>
                    <span>Añadir Cliente</span>
                    </button>
                    <Link
                        to={"/clientes/"} className="btn btn-success">
                        Volver
                    </Link>
                </div>
            ) : (
                <div>
                    <h4>Cliente</h4>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            required
                            value={cliente.nombre}
                            onChange={handleInputChange}
                            name="nombre"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="apellido">Apellido</label>
                        <input
                            type="text"
                            className="form-control"
                            id="apellido"
                            required
                            value={cliente.apellido}
                            onChange={handleInputChange}
                            name="apellido"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            required
                            value={cliente.email}
                            onChange={handleInputChange}
                            name="email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefono">Teléfono</label>
                        <input
                            type="text"
                            className="form-control"
                            id="telefono"
                            required
                            value={cliente.telefono}
                            onChange={handleInputChange}
                            name="telefono"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="text"
                            className="form-control"
                            id="password"
                            required
                            value={cliente.password}
                            onChange={handleInputChange}
                            name="password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-success" 
                        onClick={salvarCliente}>
                        <span>Guardar Cliente</span>
                    </button>

                    <Link
                        to={"/clientes/"} className="btn btn-success">
                        Volver
                    </Link>

                </div>
            )}
        </div>
    );

};

export default ClienteAdd;