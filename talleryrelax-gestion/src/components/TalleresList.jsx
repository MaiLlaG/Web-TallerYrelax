import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TallerDataService from "../services/TallerDataService";
import '../App.css';
import '../index.css';
import '../views/TalleresList.css';

const TalleresList = () => {
    const [talleres, setTalleres] = useState([]);
    const [actualTaller, setActualTaller] = useState(null);
    const [actualIndex, setActualIndex] = useState(-1);
    const [buscarxNombre, setBuscarxNombre] = useState("");

    useEffect(() => {
        recuperarTalleres();
    }, []);

    const onChangeBuscarxNombre = e => {
        const buscarxNombre = e.target.value;
        setBuscarxNombre(buscarxNombre);
    };

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

    const findByName = () => {
        TallerDataService.findByName(buscarxNombre)
            .then(response => {
                setTalleres(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (

        <div className="container-fluid row min-height-85 pt-3 d-flex justify-content-evenly gap-5">
            <div className="col-md-4 px-3">
                <h4 className="font-Raleway letter-spacing-2 ms-1 fs-4 fw-bold mb-4">Lista de talleres</h4>
                <ul className="list-group shadow rounded-5 mb-3 font-Raleway-bold letter-spacing-2">
                    {talleres && talleres.map((taller, index) => (
                        <li
                            className={
                                "py-3 px-4 list-group-item list-group-item-action list-group-flush " + (index === actualIndex ? "active" : "")
                            }
                            onClick={() => setActiveTaller(taller, index)} key={index}>
                            {taller.nombre}
                        </li>
                    )).reverse()}
                </ul>

                <div className="d-flex flex-wrap justify-content-center col-gap-2 mb-4">
                    <Link to={"/nuevoTaller"} className="btn btn-primary border-dark mt-3 mb-3 rounded-0 min-w-bt-27">
                        <span className="font-Raleway letter-spacing-2">Añadir</span>
                    </Link>

                    <Link
                        to={"/gestion"} className="btn btn-outline-light border-dark text-black mt-3 mb-3 rounded-0 min-w-bt-27">
                        <span className="font-Raleway-bold letter-spacing-2">Volver</span>
                    </Link>
                </div>
            </div>

            <div className="col-md-5 d-flex justify-content-center ms-2 px-5 pb-5">
                {actualTaller ? (
                    <div>
                        <h4 className="text-center font-Raleway letter-spacing-2 fs-4 fw-bold">Taller</h4>
                        <div className="d-flex flex-wrap flex-column align-items-center ">
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

                        <div className="d-flex flex-wrap flex-column align-items-flex-start align-content-center">
                            <div>
                                <label>
                                    <p className="text-secondary font-Raleway letter-spacing-2 fs-6">Descripción </p>
                                    <hr className="hr-with" />
                                    <p className="text-secondary font-Raleway pe-2">
                                        Llena el alma de luz y energía con la bruma para el cuerpo y el cabello de The Ritual of Mehr.
                                        Perfuma tu cabello, tu piel y el ambiente que te rodea con la elegante fragancia de la naranja dulce y la madera de cedro,
                                        impregnándolos con una dosis de positividad que te aportará energía durante todo el día.
                                        Su fórmula acuosa es segura sobre la piel y no mancha los tejidos.
                                    </p>
                                </label>
                                {<div className="text-secondary font-Raleway fs-6 pe-2" dangerouslySetInnerHTML={{ __html: actualTaller.descripcion }} />}
                                <hr className="hr-with" />
                            </div>
                            <div>
                                <p className="text-secondary font-Raleway letter-spacing-2">Fecha de inicio: <span className="ms-2 opacity-75 font-Roboto">{actualTaller.fechainicio == null ? null : actualTaller.fechainicio.substring(0, 10)}</span></p>
                            </div>
                            <div>                           
                                <p className="text-secondary font-Raleway letter-spacing-2">Semanas de duración: <span className="ms-2 opacity-75 font-Roboto">{actualTaller.durasemanas}</span></p>
                            </div>
                            <div>
                                <p className="text-secondary font-Raleway letter-spacing-2">Días a la semana: <span className="ms-2 opacity-75 font-Roboto">{actualTaller.diasxsemana}</span></p>
                            </div>
                            <div>
                                <p className="text-secondary font-Raleway letter-spacing-2">Número de plazas: <span className="ms-2 opacity-75 font-Roboto">{actualTaller.nplazas}</span></p>
                            </div>
                            <div>
                                <p className="text-secondary font-Raleway letter-spacing-2">Plazas compradas: <span className="ms-2 opacity-75 text-primary font-Roboto">{actualTaller.plazasCompradas !== actualTaller.nplazas ? actualTaller.plazasCompradas : actualTaller.plazasCompradas + " Agotado"}</span></p>
                            </div>
                            <div>                                                                                                                                 
                                <p className="text-secondary font-Raleway letter-spacing-2">Dificultad: <span className="ms-2 opacity-75 font-Roboto">{actualTaller.dificultad}</span></p>
                            </div>
                            <div>
                                <p className="text-secondary font-Raleway letter-spacing-2">Precio: <span className="ms-2 opacity-75 font-Roboto">{actualTaller.precio}</span>€</p>
                                <hr className="hr-with" />
                            </div>

                            <div className="d-flex justify-content-center gap-2">
                                <Link
                                    to={"/talleres/" + actualTaller.id} className="btn btn-primary border-dark mt-3 mb-5 w-75 min-w-bt-27 rounded-0">
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
                                                <li className="pt-3 pb-2 px-4 list-group-item list-group-item-primary list-group-item-action text-dark font-Roboto letter-spacing-2">
                                                    {compra.nombre} / {compra.email} / {compra.telefono} / {compra.importeCompra}€ / {compra.fechaCompra == null ? null : compra.fechaCompra.substring(0, 10,)} / {compra.metodoDePago.nombre}
                                                    
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
                        <br />
                        <p className="font-Raleway letter-spacing-2 fw-bold">Haz click en un taller...</p>
                    </div>
                )}

            </div>
        </div>
    );
}
export default TalleresList;