import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import TallerDataService from "../services/TallerService";
import '../App.css';
import '../index.css';

const Taller = () => {
    const { id } = useParams();
    let navigate = useNavigate();

    const tallerState = {
        id: null,
        nombre: "",
        descripcion: "",
        precio: "",
        durasemanas: "",
        diasxsemana: "",
        nplazas: "",
        plazasCompradas: "",
        fechainicio: "",
        dificultad: "",
        imagen: null
    };

    const [actualTaller, setActualTaller] = useState(tallerState);
    const [message, setMessage] = useState("");

    const getTaller = id => {
        TallerDataService.get(id)
            .then(response => {
                setActualTaller(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        if (id)
            getTaller(id);
    }, [id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setActualTaller({ ...actualTaller, [name]: value });
    };

    //const updateTaller = status => { };

    const actualizarTaller = () => {
        TallerDataService.update(actualTaller.id, actualTaller)
            .then(response => {
                console.log(response.data);
                setMessage("El taller fue actualizado correctamente");
            })
            .catch(e => {
                console.log(e);
            });
    };

    const eliminarTaller = () => {
        TallerDataService.remove(actualTaller.id)
            .then(response => {
                console.log(response.data);
                navigate("/talleres");
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            {actualTaller ? (
                <div className="edit-form">
                    <h4>Taller</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nombre"
                                name="nombre"
                                value={actualTaller.nombre}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="descripcion">Descripcion</label>
                            <input
                                type="text"
                                className="form-control"
                                id="descripcion"
                                name="descripcion"
                                value={actualTaller.descripcion}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="precio">Precio</label>
                            <input
                                type="text"
                                className="form-control"
                                id="precio"
                                name="precio"
                                value={actualTaller.precio}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="durasemanas">Semanas de duración</label>
                            <input
                                type="text"
                                className="form-control"
                                id="durasemanas"
                                name="durasemanas"
                                value={actualTaller.durasemanas}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="diasxsemana">Días a la semana</label>
                            <input
                                type="text"
                                className="form-control"
                                id="diasxsemana"
                                name="diasxsemana"
                                value={actualTaller.diasxsemana}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nplazas">Número de plazas</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nplazas"
                                name="nplazas"
                                value={actualTaller.nplazas}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="plazasCompradas">Plazas compradas</label>
                            <input
                                type="text"
                                className="form-control"
                                id="plazasCompradas"
                                name="plazasCompradas"
                                value={actualTaller.plazasCompradas}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fechainicio">Fecha de inicio</label>
                            <input
                                type="text"
                                className="form-control"
                                id="fechainicio"
                                name="fechainicio"
                                value={actualTaller.fechainicio}
                                onChange={handleInputChange}
                            />
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="fechainicio">Fecha de inicio</label>
                            <input
                                type="text"
                                className="form-control"
                                id="fechainicio"
                                name="fechainicio"
                                value={actualTaller.fechainicio}
                                onChange={handleInputChange}
                            />
                        </div> */}
                        <div className="form-group">
                            <label htmlFor="dificultad">Dificultad</label>
                            <input
                                type="text"
                                className="form-control"
                                id="dificultad"
                                name="dificultad"
                                value={actualTaller.dificultad}
                                onChange={handleInputChange}
                            />
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="imagen">Imagen</label>
                            <input
                                type="text"
                                className="form-control"
                                id="imagen"
                                name="imagen"
                                value={actualTaller.imagen}
                                onChange={handleInputChange}
                            />
                        </div> */}
                    </form>

                    <button
                        type="submit"
                        className="btn btn-4 btn-holder hover-border-7" onClick={eliminarTaller}>
                        <span>Eliminar</span>
                    </button>

                    <button
                        type="submit"
                        className="btn btn-4 btn-holder hover-border-7" onClick={actualizarTaller}>
                        <span>Actualizar</span>
                    </button>

                    <Link
                        to={"/talleres"} className="btn btn-4 btn-holder hover-border-7">
                        Volver
                    </Link>

                    <p>{message}</p>
                </div>
            ) : (
                <div>
                    <br />
                    <p>Haz click en un taller...</p>
                </div>
            )}
        </div>
    );
};

export default Taller;