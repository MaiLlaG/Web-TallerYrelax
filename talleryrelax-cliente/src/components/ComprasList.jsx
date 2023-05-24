import React, { useState, useEffect, useContext } from "react";
import CompraDataService from "../services/CompraDataService";
import { Link } from "react-router-dom";
import '../App.css';
import '../index.css';
import '../views/ComprasList.css';
import UsuarioContext from "./Usuario";

const ComprasList = () => {
    const [compras, setCompras] = useState([]);
    const [actualCompra, setActualCompra] = useState(null);
    const [actualIndex, setActualIndex] = useState(-1);

    useEffect(() => {
        recuperarCompras();
    }, []);

    const recuperarCompras = () => {
        CompraDataService.getAllAutenticado()
            .then(response => {
                setCompras(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const setActiveCompra = (compra, index) => {
        setActualCompra(compra);
        setActualIndex(index);
    };

    const usuario = useContext(UsuarioContext);

    return (
        <div className="">
            <div className="container-fluid row min-height-85 bg-arena pt-3 m-0 d-flex align-content-start align-content-flex-start justify-content-evenly gap-5">
                <div>
                    <h4 className="letter-spacing-2 text-center fs-4 fw-bold mt-4 ms-1">Mi lista de compras</h4>
                    {usuario.user ?
                        (
                            <div></div>
                        ) : (
                            <p className="text-primary text-center letter-spacing-2 mt-5">Tienes que estar Loguead@ para ver tu Lista de compras</p>
                        )
                    }
                </div>
                {usuario.user ?
                    (
                        <div className="col-md-5 px-3">
                            <ul className="list-group rounded-0 mb-3 font-Raleway-bold letter-spacing-2">
                                {compras && compras.map((compra, index) => (
                                    <li
                                        className={
                                            "py-3 px-4 mb-3 shadow list-group-item list-group-item-action list-group-flush" + (index === actualIndex ? "active" : "")
                                        }
                                        onClick={() => setActiveCompra(compra, index)} key={index}>
                                        <span className="fw-bold">{compra.taller.nombre}</span> comprado el {compra.fechaCompra == null ? null : compra.fechaCompra.substring(0, 10)}
                                    </li>
                                )).reverse()}
                            </ul>
                            
                        </div>

                    ) : (
                        <div></div>
                    )
                }
                {usuario.user ?
                    (
                        <div className="col-md-5 d-flex justify-content-center ms-2 px-5 pb-5">
                            {actualCompra ? (
                                <div>
                                    <h4 className="text-dark text-center letter-spacing-2 fs-6 fw-bold mb-3">Información de la compra:</h4>
                                    <div className="d-flex flex-wrap flex-column align-items-center">
                                        <p className="text-primary letter-spacing-2 fs-5 fw-bold mt-3 mb-3">Taller de {actualCompra.taller.nombre}</p>
                                    </div>
                                    {/*<p className="text-dark mb-4">Este contenido es de información</p>*/}
                                    <div>
                                        <label>
                                            <p className="text-dark letter-spacing-2 fs-6 fw-bold">Importe: </p>
                                        </label>
                                        <p className="text-primary">{actualCompra.importeCompra}</p>
                                    </div>
                                    <div>
                                        <label>
                                            <p className="text-dark letter-spacing-2 fs-6 fw-bold">Fecha: </p>
                                        </label>
                                        <p className="text-primary">{actualCompra.fechaCompra == null ? null : actualCompra.fechaCompra.substring(0, 10)}</p>
                                    </div>
                                    <div>
                                        <label>
                                            <p className="text-dark letter-spacing-2 fs-6 fw-bold">Método de pago: </p>
                                        </label>
                                        <p className="text-primary">{actualCompra.metodoDePago.nombre}</p>
                                    </div>
                                    <div>
                                        <label>
                                            <p className="text-dark letter-spacing-2 fs-6 fw-bold">Nombre: </p>
                                        </label>
                                        <p className="text-primary">{actualCompra.nombre}</p>
                                    </div>
                                    <div>
                                        <label>
                                            <p className="text-dark letter-spacing-2 fs-6 fw-bold">Email: </p>
                                        </label>
                                        <p className="text-primary">{actualCompra.email}</p>
                                    </div>
                                    <div>
                                        <label>
                                            <p className="text-dark letter-spacing-2 fs-6 fw-bold">Telefono: </p>
                                        </label>
                                        <p className="text-primary">{actualCompra.telefono}</p>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <p className="letter-spacing-2 fw-bold">Haz click para ver en detalle...</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div></div>
                    )
                }
            </div>
        </div>
    );
};

export default ComprasList;