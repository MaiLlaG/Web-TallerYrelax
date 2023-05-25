import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClienteDataService from "../services/ClienteDataService";
import '../App.css';
import '../index.css';

const ClientesList = () => {
    const [clientes, setClientes] = useState([]);
    const [actualCliente, setActualCliente] = useState(null);
    const [actualIndex, setActualIndex] = useState(-1);

    useEffect(() => {
        recuperarClientes();
    }, []);

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

    return (
        <div className="container-fluid row min-height-85 pt-3 d-flex justify-content-evenly gap-1">
            <div className="col-md-4 px-3 ms-4">
                <h4 className="font-Raleway letter-spacing-2 ms-3 fs-4 fw-bold mb-4">Lista de clientes</h4>
                <ul className="list-group rounded-5 mb-3 font-Raleway-bold letter-spacing-2">
                    {clientes && clientes.map((cliente, index) => (
                        <li
                            className={
                                "py-3 px-4 mb-3 shadow list-group-item list-group-item-action list-group-flush " + (index === actualIndex ? "active" : "")
                            }
                            onClick={() => setActiveCliente(cliente, index)} key={index}>
                            {cliente.nombre}
                        </li>
                    )).reverse()}
                </ul>

                <div className="d-flex flex-wrap justify-content-center col-gap-2 mb-4">
                    <Link to={"/nuevoCliente"} className="btn btn-primary border-dark mt-3 mb-3 mx-2 rounded-0 min-w-bt-27">
                        <span className="font-Raleway letter-spacing-2">Añadir</span>
                    </Link>

                    <Link
                        to={"/"} className="btn btn-outline-light border-dark text-black mt-3 mb-3 mx-2 rounded-0 min-w-bt-27">
                        <span className="font-Raleway-bold letter-spacing-2">Volver</span>
                    </Link>
                </div>
            </div>

            <div className="col-md-5 d-flex justify-content-center px-5 pb-5">
                {actualCliente ? (
                    <div className="ms-4">
                        <h4 className="font-Raleway letter-spacing-2 fs-4 fw-bold mb-4">Cliente</h4>
                        <div>
                            <label>
                                <p className="text-secondary font-Raleway letter-spacing-2">Nombre: </p>
                            </label>
                            <p className="mb-4 text-black font-Raleway-bold letter-spacing-2 fs-6">{actualCliente.nombre}</p>
                        </div>
                        <div>
                            <label>
                                <p className="text-secondary font-Raleway letter-spacing-2">Email: </p>
                            </label>
                            <p className="mb-4 text-black font-Raleway-bold letter-spacing-2 fs-6">{actualCliente.email}</p>
                        </div>

                        <div className="d-flex justify-content-center gap-2">
                            <Link
                                to={"/clientes/" + actualCliente.id} className="btn btn-primary border-dark mt-3 mb-5 w-75 min-w-bt-27 rounded-0">
                                <span className="font-Raleway letter-spacing-2">Editar</span>
                            </Link>
                        </div>

                    </div>
                ) : (
                    <div>
                        <p className="font-Raleway letter-spacing-2 fw-bold">Haz click en un cliente...</p>
                    </div>
                )}
            </div>

        </div>
    );

};

export default ClientesList;