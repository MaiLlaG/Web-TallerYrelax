import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TallerDataService from "../services/TallerDataService";
import '../App.css';
import '../index.css';

const TalleresList = () => {
    const [talleres, setTalleres] = useState([]);
    const [actualTaller, setActualTaller] = useState(null);
    const [actualIndex, setActualIndex] = useState(-1);

    useEffect(() => {
        recuperarTalleres();
    }, []);

    const recuperarTalleres = () => {
        TallerDataService.getAll()
            .then(response => {
                setTalleres(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };


    const setActiveTaller = (taller, index) => {
        setActualTaller(taller);
        setActualIndex(index);
    };

    return (

        <div className="container-fluid row min-height-85 pt-3 d-flex justify-content-evenly gap-5">
            <div className="col-md-4 px-3 ms-3">
                <h4 className="font-Raleway letter-spacing-2 ms-2 fs-4 fw-bold mb-4">Lista de talleres</h4>
                <ul className="list-group rounded-5 mb-3 font-Raleway-bold letter-spacing-2">
                    {talleres && talleres.map((taller, index) => (
                        <li
                            className={
                                "py-3 px-4 mb-3 shadow list-group-item list-group-item-action list-group-flush " + (index === actualIndex ? "active" : "")
                            }
                            onClick={() => setActiveTaller(taller, index)} key={index}>
                            {taller.nombre}
                        </li>
                    )).reverse()}
                </ul>

                <div className="d-flex flex-wrap justify-content-center col-gap-2 mb-4">
                    <Link to={"/nuevoTaller"} className="btn btn-primary border-dark mt-3 mb-3 mx-2 rounded-0 min-w-bt-27">
                        <span className="font-Raleway letter-spacing-2">Añadir</span>
                    </Link>

                    <Link
                        to={"/gestion"} className="btn btn-outline-light border-dark text-black mt-3 mb-3 mx-2 rounded-0 min-w-bt-27">
                        <span className="font-Raleway-bold letter-spacing-2">Volver</span>
                    </Link>
                </div>
            </div>

            <div className="col-md-5 d-flex justify-content-center ms-2 px-5 pb-5">
                {actualTaller ? (
                    <div className="">
                        <h4 className="text-center font-Raleway letter-spacing-2 fs-4 fw-bold">Taller</h4>
                        <div className="d-flex flex-wrap flex-column align-items-center">
                            <div className="">
                                <p className="mt-3 text-primary font-Raleway-bold letter-spacing-2 fs-5">{actualTaller.nombre}</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                {actualTaller.imagen ?
                                    <img className="rounded-circle mt-2 mb-5 w-75" src={`data:image/jpeg;base64,${actualTaller.imagen}`} alt={actualTaller.nombre} />
                                    :
                                    <img className="rounded-circle mt-2 mb-5 w-75" src={require("../img/sin-imagen.png")} alt={actualTaller.nombre} />
                                }
                            </div>
                        </div>

                        <div className="d-flex flex-wrap flex-column justify-content-center align-content-start align-content-center">
                            <div>
                                <ul className="nav border-bottom border-secondary border-opacity-50 pb-1 mb-3">
                                    <li className="nav-item">
                                        <p className="text-secondary font-Raleway letter-spacing-2 fs-6">Descripción </p>
                                    </li>
                                </ul>
                                {<div className="text-secondary font-Raleway fs-6 pe-2" dangerouslySetInnerHTML={{ __html: actualTaller.descripcion }} />}
                            </div>
                            <div>
                                <u className="nav justify-content-center border-bottom border-secondary border-opacity-50 pb-2 mb-3"></u>
                            </div>
                            <div>
                                <p className="text-secondary font-Raleway letter-spacing-2 pt-2">Fecha de inicio: {actualTaller.fechainicio == null ? null : actualTaller.fechainicio.substring(0, 10)}</p>
                            </div>
                            <div>
                                <p className="text-secondary font-Raleway letter-spacing-2">Semanas de duración: {actualTaller.durasemanas}</p>
                            </div>
                            <div>
                                <p className="text-secondary font-Raleway letter-spacing-2">Días a la semana: {actualTaller.diasxsemana}</p>
                            </div>
                            <div>
                                <p className="text-secondary font-Raleway letter-spacing-2">Número de plazas: {actualTaller.nplazas}</p>
                            </div>
                            <div>
                                <p className="text-secondary font-Raleway letter-spacing-2">Plazas compradas: <span className="text-primary">{actualTaller.plazasCompradas !== actualTaller.nplazas ? actualTaller.plazasCompradas : actualTaller.plazasCompradas + " Agotado"}</span></p>
                            </div>
                            <div>
                                <p className="text-secondary font-Raleway letter-spacing-2">Dificultad: {actualTaller.dificultad}</p>
                            </div>
                            <div>
                                <p className="text-secondary font-Raleway letter-spacing-2">Precio: {actualTaller.precio}€</p>
                            </div>
                            <div>
                                <u className="nav justify-content-center border-bottom border-secondary border-opacity-50 pb-3 mb-3"></u>
                            </div>

                            <div className="d-flex justify-content-center gap-2">
                                <Link
                                    to={"/talleres/" + actualTaller.id} className="btn btn-primary border-dark mt-4 mb-5 w-75 min-w-bt-27 rounded-0">
                                    <span className="font-Raleway letter-spacing-2">Editar</span>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-Raleway letter-spacing-2 fs-4 fw-bold mt-5 mb-4">Talleres comprados</h4>
                            {
                                (actualTaller.compras && actualTaller.compras.length > 0) ?
                                    <div className="">
                                        <ul className="list-group list-group-numbered list-group-flush shadow rounded-5 mb-3"> {/* list-unstyled lo mismo list-style: none; */}
                                            {actualTaller.compras && actualTaller.compras.map((compra, index) => (
                                                <li key={index} className="pt-3 pb-2 px-4 list-group-item list-group-item-primary list-group-item-action text-dark font-Roboto letter-spacing-2">
                                                    {compra.nombre} / {compra.email} / {compra.telefono} / {compra.importeCompra}€ / {compra.fechaCompra == null ? null : compra.fechaCompra} / {compra.metodoDePago.nombre}

                                                    <div className="d-flex justify-content-center">
                                                        <Link
                                                            to={"/clientes/" + compra.cliente.id} className="btn border-light bg-secondary bg-opacity-25 font-500 rounded-0 p-2 mt-2 mb-2 mx-3 w-50 min-w-bt-27">
                                                            <span className="text-light font-Raleway-bold letter-spacing-2">Ir al cliente</span>
                                                        </Link>
                                                    </div>
                                                </li>

                                            ))}
                                        </ul>
                                    </div>
                                    :
                                    <p className="font-Raleway letter-spacing-2 fw-bold">No hay compras realizadas</p>

                            }


                        </div>

                    </div>
                ) : (
                    <div>
                        <p className="font-Raleway letter-spacing-2 fw-bold">Haz click en un taller...</p>
                    </div>
                )}

            </div>
        </div>
    );
}
export default TalleresList;