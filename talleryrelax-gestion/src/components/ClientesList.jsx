import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClienteDataService from "../services/ClienteDataService";
import '../App.css';
import '../index.css';
import '../views/ClientesList.css';

const ClientesList = () => {
    const [clientes, setClientes] = useState([]);
    const [actualCliente, setActualCliente] = useState(null);
    const [actualIndex, setActualIndex] = useState(-1);
    const [buscarxNombre, setBuscarxNombre] = useState("");

    useEffect(() => {
        recuperarClientes();
    }, []);

    const onChangeBuscarxNombre = e => {
        const buscarxNombre = e.target.value;
        setBuscarxNombre(buscarxNombre);
    };

    const recuperarClientes = () => {
        ClienteDataService.getAll()
            .then(response => {
                setClientes(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const setActiveCliente = (cliente, index) => {
        setActualCliente(cliente);
        setActualIndex(index);
    };

    const findByName = () => {
        ClienteDataService.findByName(buscarxNombre)
            .then(response => {
                setClientes(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div className="row min-height-85">

            <div className="col-md-6">
                <h4>Lista de clientes</h4>
                <ul className="list-group">
                    {clientes && clientes.map((cliente, index) => (
                        <li
                            className={
                                "list-group-item " + (index === actualIndex ? "active" : "")
                            }
                            onClick={() => setActiveCliente(cliente, index)} key={index}>
                            {cliente.nombre}
                        </li>
                    ))}
                </ul>

                <Link to={"/nuevoCliente"} className="btn btn-primary">
                    <span>Añadir Cliente</span>
                </Link>

                <Link
                    to={"/gestion"} className="btn btn-primary">
                    <span>Volver</span>
                </Link>
            </div>

            <div className="col-md-6">
                {actualCliente ? (
                    <div>
                        <h4>Cliente</h4>
                        <div>
                            <label>
                                <p className="text-black">Nombre </p>
                            </label>{" "}
                            <p className="text-secondary">{actualCliente.nombre}</p>
                        </div>
                        <div>
                            <label>
                            <p className="text-black">Email </p>
                            </label>{" "}
                            <p className="text-secondary">{actualCliente.email}</p>
                        </div>

                        <Link
                            to={"/clientes/" + actualCliente.id} className="btn btn-primary">
                            <span>Editar</span>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Haz click en un cliente...</p>
                    </div>
                )}
            </div>

        </div>
    );

};

export default ClientesList;