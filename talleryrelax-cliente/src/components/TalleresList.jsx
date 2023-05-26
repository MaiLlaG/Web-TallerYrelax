import React, { useState, useEffect, useContext } from "react";
import TallerDataService from "../services/TallerDataService";
import { Link } from "react-router-dom";
import '../App.css';
import '../index.css';
import '../views/TalleresList.css';
import UsuarioContext from "./Usuario";

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

    const usuario = useContext(UsuarioContext);


    return (
        <div className="container-fluid row min-height-75 d-flex justify-content-evenly">
            <main className="bg-arena container-fluid row m-0">
                {actualTaller ? (
                    <div className="mt-5">
                        <div className="container-fluid row min-height-75 d-flex justify-content-evenly">

                            <div className="col-md-5 d-flex justify-content-center ms-2 pb-1">
                                <div className="min-width-230 ps-4">
                                    <div>
                                        <label>
                                            <h2 className="text-warning mt-3">{actualTaller.nombre}</h2>
                                        </label>
                                    </div>
                                    <div>
                                        <ul className="nav border-bottom border-secondary border-opacity-25 pb-1 mb-3">
                                            <li className="nav-item">
                                            </li>
                                        </ul>
                                        {<div className="text-secondary opacity-75 font-Raleway letter-spacing-2 min-width-220p" dangerouslySetInnerHTML={{ __html: actualTaller.descripcion }} />}
                                    </div>
                                    <ul className="nav border-bottom border-secondary border-opacity-25 pb-1 mb-3">
                                        <li className="nav-item">
                                        </li>
                                    </ul>
                                    <div>
                                        <label>
                                            <p className="text-secondary opacity-75 font-Raleway letter-spacing-2">Precio: {actualTaller.precio}€</p>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <p className="text-secondary opacity-75 font-Raleway letter-spacing-2">Semanas de duración: {actualTaller.durasemanas}</p>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <p className="text-secondary opacity-75 font-Raleway letter-spacing-2">Días a la semana: {actualTaller.diasxsemana}</p>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <p className="text-secondary opacity-75 font-Raleway letter-spacing-2">Número de plazas: {actualTaller.nplazas}</p>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <p className="text-secondary opacity-75 font-Raleway letter-spacing-2">Plazas compradas: {actualTaller.plazasCompradas !== actualTaller.nplazas ? actualTaller.plazasCompradas : actualTaller.plazasCompradas + " Agotado"}</p>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <p className="text-secondary opacity-75 font-Raleway letter-spacing-2">Fecha de inicio: {actualTaller.fechainicio == null ? null : actualTaller.fechainicio.substring(0, 10)}</p>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <p className="text-secondary opacity-75 font-Raleway letter-spacing-2">Dificultad: {actualTaller.dificultad}</p>
                                        </label>
                                    </div>
                                    <ul className="nav border-bottom border-secondary border-opacity-25 pb-1 mb-3">
                                        <li className="nav-item">
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5 justify-content-center ms-2 d-flex align-items-center h-50">
                                <div className="d-flex justify-content-center">
                                    {actualTaller.imagen ?
                                        <img className="rounded-circle mt-2 mt-5 ms-4 mb-1 w-75" src={`data:image/jpeg;base64,${actualTaller.imagen}`} alt={actualTaller.nombre} />
                                        :
                                        <img className="rounded-circle mt-2 mt-5 ms-4 mb-1 w-75" src={require("../img/sin-imagen.png")} alt={actualTaller.nombre} />
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center ms-4">
                            <div className="d-flex flex-wrap">
                                {usuario.user ?
                                    (actualTaller.nplazas - actualTaller.plazasCompradas > 0) ?
                                        <Link
                                            to={"/compras/" + actualTaller.id}
                                            className="btn btn-primary border-dark mt-2 ms-1 me-3 mb-5 rounded-0 min-w-bt-27">
                                            <span className="font-Raleway letter-spacing-2">Comprar</span>
                                        </Link>
                                        :
                                        <div>
                                            <label>
                                                <p className="text-danger font-Raleway letter-spacing-2">No quedan plazas</p>
                                            </label>
                                        </div>
                                    :
                                    <div>
                                        <label>
                                            <p className="text-primary font-Raleway letter-spacing-2 mt-3 mb-4 me-2">Autentícate para poder comprar</p>
                                        </label>
                                    </div>
                                }

                                <Link
                                    onClick={() => setActiveTaller(null, -1)}
                                    className="btn btn-outline-light border-dark text-black mt-2 mx-2 mb-5 rounded-0 min-w-bt-27">
                                    <span className="font-Raleway-bold letter-spacing-2">Volver</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (

                    <div className="">
                        <div className="d-flex justify-content-center">
                            <div className="col-lg-9 talleres">
                                {talleres && talleres.map((taller, index) => (

                                    <div className="CirculosAbajo d-flex rounded-circle bg-secondary bg-opacity-10 border border-2 border-dark shadow" onClick={() => setActiveTaller(taller, index)} key={index}>
                                        <figure className="snip1566 rounded-circle">
                                            {taller.imagen ?
                                                <img className="" src={`data:image/jpeg;base64,${taller.imagen}`} alt={taller.nombre} />
                                                :
                                                <img className="" src={require("../img/sin-imagen.png")} alt={taller.nombre} />
                                            }
                                            <figcaption>
                                                <h1 className="circuloText">{taller.nombre}</h1>
                                            </figcaption>
                                            <a href="#"></a>
                                        </figure>
                                    </div>

                                )).reverse()}

                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default TalleresList;