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
        <div className="row min-height-85">

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
                            <p className="text-black">Nombre </p>
                                </label>{" "}
                            <p className="text-secondary">{actualTaller.nombre}</p>
                        </div>
                        <div>
                            <label>
                                <p></p>
                            </label>
                            {actualTaller.imagen ?
                                <img src={`data:image/jpeg;base64,${actualTaller.imagen}`} alt={actualTaller.nombre} />
                                :
                                <img src={require("../img/taller-sin-imagen.png")} alt={actualTaller.nombre} />
                            }
                        </div>
                        
                        <div>
                            <label>
                            <p className="text-black">Descripcion </p>
                            </label>{" "}
                            { <div dangerouslySetInnerHTML={{ __html: actualTaller.descripcion }} /> }
                        </div>
                        <div>
                            <label>
                            <p className="text-black">Precio </p>
                            </label>{" "}
                            <p className="text-secondary">{actualTaller.precio}</p>
                        </div>
                        <div>
                            <label>
                            <p className="text-black">Semanas de duración </p>
                            </label>{" "}
                            <p className="text-secondary">{actualTaller.durasemanas}</p>
                        </div>
                        <div>
                            <label>
                            <p className="text-black">Días a la semana </p>
                            </label>{" "}
                            <p className="text-secondary">{actualTaller.diasxsemana}</p>
                        </div>
                        <div>
                            <label>
                            <p className="text-black">Número de plazas </p>
                            </label>{" "}
                            <p className="text-secondary">{actualTaller.nplazas}</p>
                        </div>
                        <div>
                            <label>
                            <p className="text-black">Plazas compradas </p>
                            </label>{" "}
                            <p className="text-secondary">{actualTaller.plazasCompradas}</p>
                        </div>
                        <div>
                            <label>
                            <p className="text-black">Fecha de inicio </p>
                            </label>{" "}
                            <p className="text-secondary">{actualTaller.fechainicio == null ? null : actualTaller.fechainicio.substring(0,10)}</p>
                        </div>
                        <div>
                            <label>
                            <p className="text-black">Dificultad </p>
                            </label>{" "}
                            <p className="text-secondary">{actualTaller.dificultad}</p>
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