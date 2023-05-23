import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TrabajadorDataService from "../services/TrabajadorDataService";
import '../App.css';
import '../index.css';
import '../views/TrabajadoresList.css';

const TrabajadoresList = () => {
    const [trabajadores, setTrabajadores] = useState([]);
    const [actualTrabajador, setActualTrabajador] = useState(null);
    const [actualIndex, setActualIndex] = useState(-1);

    useEffect(() => {
        recuperarTrabajadores();
    }, []);

    const recuperarTrabajadores = () => {
        TrabajadorDataService.getAll()
            .then(response => {
                setTrabajadores(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };


    const setActiveTrabajador = (trabajador, index) => {
        setActualTrabajador(trabajador);
        setActualIndex(index);
    };

    return (
        <div className="container-fluid row min-height-85 pt-3 d-flex justify-content-evenly gap-1">
            <div className="col-md-4 px-3">
                <h4 className="font-Raleway letter-spacing-2 ms-1 fs-4 fw-bold mb-4">Lista de trabajadores</h4>
                <ul className="list-group shadow rounded-5 mb-3 font-Raleway-bold letter-spacing-2">
                    {trabajadores && trabajadores.map((trabajador, index) => (
                        <li
                            className={
                                "py-3 px-4 list-group-item list-group-item-action list-group-flush " + (index === actualIndex ? "active" : "")
                            }
                            onClick={() => setActiveTrabajador(trabajador, index)} key={index}>
                            {trabajador.nombre}
                        </li>
                    )).reverse()}
                </ul>

                <div className="d-flex flex-wrap justify-content-center col-gap-2 mb-4">
                    <Link to={"/nuevoTrabajador"} className="btn btn-primary border-dark mt-3 mb-3 rounded-0 min-w-bt-27">
                        <span className="font-Raleway letter-spacing-2">Añadir</span>
                    </Link>

                    <Link
                        to={"/gestion"} className="btn btn-outline-light border-dark text-black mt-3 mb-3 rounded-0 min-w-bt-27">
                        <span className="font-Raleway-bold letter-spacing-2">Volver</span>
                    </Link>
                </div>

            </div>
            <div className="col-md-5 d-flex justify-content-center ms-2 px-3 pb-1">
                {actualTrabajador ? (
                    <div className="w-75">
                        <h4 className="font-Raleway letter-spacing-2 fs-4 fw-bold mb-4">Trabajador</h4>
                        <div>
                            <label>
                                <p className="text-secondary font-Raleway letter-spacing-2">Nombre: </p>
                            </label>
                            <p className="mb-4 text-black font-Raleway letter-spacing-2 fs-6">{actualTrabajador.nombre}</p>

                        </div>
                        <div>
                            <label>
                                <p className="text-secondary font-Raleway letter-spacing-2">Email: </p>
                            </label>
                            <p className="mb-4 text-black font-Raleway letter-spacing-2 fs-6">{actualTrabajador.email}</p>
                        </div>
                        <div>
                            <label>
                                <p className="text-secondary font-Raleway letter-spacing-2">Puesto: </p>
                            </label>
                            <p className="mb-4 text-black font-Raleway letter-spacing-2 fs-6">{actualTrabajador.puesto}</p>
                        </div>

                        <div className="d-flex justify-content-center gap-2">
                            <Link
                                to={"/trabajadores/" + actualTrabajador.id} className="btn btn-primary border-dark mt-3 mb-5 w-75 min-w-bt-27 rounded-0">
                                <span className="font-Raleway letter-spacing-2">Editar</span>
                            </Link>
                        </div>

                    </div>
                ) : (
                    <div>
                        <br />
                        <p className="font-Raleway letter-spacing-2 fw-bold">Haz click en un trabajador...</p>
                    </div>
                )}
            </div>
        </div>
    );

};

export default TrabajadoresList;