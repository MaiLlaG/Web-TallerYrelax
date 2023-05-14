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

    /*
    const refrescarList = () => {
        recuperarTalleres();
        setActualTaller(null);
        setActualIndex(-1);
    };
    */

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
        <div className="list row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar por nombre"
                        value={buscarxNombre}
                        onChange={onChangeBuscarxNombre}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button" onClick={findByName}>
                            Buscar
                        </button>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <h4>Lista de talleres</h4>
                <ul className="list-group">
                    {talleres && talleres.map((taller, index) => (
                        <li
                            className={
                                "list-group-item " + (index === actualIndex ? "active" : "")
                            }
                            onClick={() => setActiveTaller(taller, index)} key={index}>
                            {taller.nombre}
                        </li>
                    ))}
                </ul>

                <Link to={"/nuevoTaller"} className="nav-link btn btn-success">
                    Nuevo Taller
                </Link>
                <Link
                    to={"/gestion"} className="btn btn-success">
                    Volver
                </Link>

            </div>
            <div className="col-md-6">
                {actualTaller ? (
                    <div>
                        <h4>Taller</h4>
                        <div>
                            <label>
                                <strong>Nombre:</strong>
                            </label>{" "}
                            {actualTaller.nombre}
                        </div>
                        <div>
                            <label>
                                <strong>Descripcion:</strong>
                            </label>{" "}
                            {actualTaller.descripcion}
                        </div>
                        <div>
                            <label>
                                <strong>Precio:</strong>
                            </label>{" "}
                            {actualTaller.precio}
                        </div>
                        <div>
                            <label>
                                <strong>Semanas de duración:</strong>
                            </label>{" "}
                            {actualTaller.durasemanas}
                        </div>
                        <div>
                            <label>
                                <strong>Días a la semana:</strong>
                            </label>{" "}
                            {actualTaller.diasxsemana}
                        </div>
                        <div>
                            <label>
                                <strong>Número de plazas:</strong>
                            </label>{" "}
                            {actualTaller.nplazas}
                        </div>
                        <div>
                            <label>
                                <strong>Fecha de inicio:</strong>
                            </label>{" "}
                            {actualTaller.fechainicio}
                        </div>
                        <div>
                            <label>
                                <strong>Dificultad:</strong>
                            </label>{" "}
                            {actualTaller.dificultad}
                        </div>
                        <div>
                            <label>
                                <strong>Imagen:</strong>
                            </label>{" "}
                            {actualTaller.imagen}
                        </div>

                        <Link
                            to={"/talleres/" + actualTaller.id} className="btn btn-success">
                            Editar
                        </Link>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Haz click en un taller...</p>
                    </div>
                )}
            </div>
        </div>
    );
}
export default TalleresList;