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
        <div className="list row min-height-85">

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

                
                <Link to={"/nuevoTaller"} className="btn btn-primary">
                    <span>Añadir-Taller</span>
                </Link>

                <Link
                    to={"/gestion"} className="btn btn-primary">
                    <span>Volver</span>
                </Link>
            </div>

            <div className="col-md-6">
                {actualTaller ? (
                    <div>
                        <h4>Taller</h4>
                        <div className="">
                            <label>
                                Nombre
                                </label>{" "}
                            {actualTaller.nombre}
                        </div>
                        <div>
                            <label>
                                Descripcion
                            </label>{" "}
                            {actualTaller.descripcion}
                        </div>
                        <div>
                            <label>
                                Precio
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
                                Días a la semana
                            </label>{" "}
                            {actualTaller.diasxsemana}
                        </div>
                        <div>
                            <label>
                                Número de plazas
                            </label>{" "}
                            {actualTaller.nplazas}
                        </div>
                        <div>
                            <label>
                                Fecha de inicio
                            </label>{" "}
                            {actualTaller.fechainicio}
                        </div>
                        <div>
                            <label>
                                Dificultad
                            </label>{" "}
                            {actualTaller.dificultad}
                        </div>
                        <div>
                            <label>
                                Imagen
                            </label>
                            {actualTaller.imagen ?
                                <img src={`data:image/jpeg;base64,${actualTaller.imagen}`} alt={actualTaller.nombre} />
                                :
                                <img src={require("../img/taller-sin-imagen.png")} alt={actualTaller.nombre} />
                            }
                        </div>

                        <Link
                            to={"/talleres/" + actualTaller.id} className="btn btn-primary">
                            <span>Editar</span>
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