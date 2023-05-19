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
    const [buscarxNombre, setBuscarxNombre] = useState("");

    useEffect(() => {
        recuperarTrabajadores();
    }, []);

    const onChangeBuscarxNombre = e => {
        const buscarxNombre = e.target.value;
        setBuscarxNombre(buscarxNombre);
    };

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

    const findByName = () => {
        TrabajadorDataService.findByName(buscarxNombre)
            .then(response => {
                setTrabajadores(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div className="row min-height-85 pt-5 d-flex justify-content-center gap-3">

            <div className="col-md-5">
                <h4>Lista de trabajadores</h4>
                <ul className="list-group">
                    {trabajadores && trabajadores.map((trabajador, index) => (
                        <li
                            className={
                                "list-group-item " + (index === actualIndex ? "active" : "")
                            }
                            onClick={() => setActiveTrabajador(trabajador, index)} key={index}>
                            {trabajador.nombre}
                        </li>
                    )).reverse()}
                </ul>

                <Link to={"/nuevoTrabajador"} className="btn btn-primary">
                    <span>Añadir Trabajador</span>
                </Link>

                <Link
                    to={"/gestion"} className="btn btn-primary">
                    <span>Volver</span>
                </Link>

            </div>
            <div className="col-md-5 d-flex justify-content-center">
                {actualTrabajador ? (
                    <div>
                        <h4>Trabajador</h4>
                        <div>
                            <label className="">
                                <p className="text-black">Nombre </p>
                            </label>
                            <p className="text-secondary">{actualTrabajador.nombre}</p>
                            
                        </div>
                        <div>
                            <label>
                                <p className="text-black">Email </p>
                            </label>
                            <p className="text-secondary">{actualTrabajador.email}</p>
                        </div>
                        <div>
                            <label>
                            <p className="text-black">Puesto </p>
                            </label>
                            <p className="text-secondary">{actualTrabajador.puesto}</p>
                        </div>

                        <Link
                            to={"/trabajadores/" + actualTrabajador.id} className="btn btn-primary">
                            <span>Editar</span>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Haz click en un trabajador...</p>
                    </div>
                )}
            </div>
        </div>
    );

};

export default TrabajadoresList;