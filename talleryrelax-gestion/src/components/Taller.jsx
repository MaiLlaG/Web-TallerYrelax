import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import TallerDataService from "../services/TallerDataService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../App.css';
import '../index.css';
import '../views/Taller.css';

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
        fechainicio: null,
        dificultad: "",
        imagen: null
    };

    const [actualTaller, setActualTaller] = useState(tallerState);
    const [message, setMessage] = useState("");

    const getTaller = id => {
        TallerDataService.get(id)
            .then(response => {
                response.data.fechainicio = response.data.fechainicio != null ? new Date(response.data.fechainicio + ".000Z") : null;
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
    const selectFile = event => {
        console.log(event.target.files[0]);
        setActualTaller({ ...actualTaller, ["imagen"]: event.target.files[0] });
    }
    const fechaInicioChanged = fecha => {
        console.log(fecha.toISOString());
        setActualTaller({ ...actualTaller, ["fechainicio"]: fecha });
    };

    const enviarTaller = () => {
        console.log(actualTaller);
        if (actualTaller.id > 0) {
            actualizarTaller();
        } else {
            crearTaller();
        }
    }

    const crearTaller = () => {
        TallerDataService.create(actualTaller)
            .then(response => {
                console.log(response.data);
                setMessage("El taller fue creado correctamente");
                getTaller(response.data.id);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const actualizarTaller = () => {
        TallerDataService.update(actualTaller.id, actualTaller)
            .then(response => {
                console.log(response.data.id);
                setMessage("El taller fue actualizado correctamente");
                getTaller(id);
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
                            <label htmlFor="descripcion">Descripción</label>
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
                            <DatePicker selected={actualTaller.fechainicio} onChange={(date) => fechaInicioChanged(date)} />
                        </div>
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
                        <div className="form-group">
                            <label htmlFor="imagen">Imagen</label>
                            <input
                                type="file"
                                className="form-control"
                                id="imagen"
                                name="imagen"
                                value=""
                                onChange={selectFile}
                            />
                            {actualTaller.imagen ?
                                typeof actualTaller.imagen.name == 'string' ?
                                    <p>Seleccionada: {actualTaller.imagen.name}</p>
                                    :
                                    <img src={`data:image/jpeg;base64,${actualTaller.imagen}`} alt={actualTaller.nombre} />
                                :
                                <img src={require("../img/taller-sin-imagen.png")} alt={actualTaller.nombre} />
                            }
                        </div>
                    </form>

                    {actualTaller.id > 0 ?
                        <button
                            type="submit"
                            className="btn btn-success"
                            onClick={eliminarTaller}>
                            <span>Eliminar</span>
                        </button>
                        :
                        <span></span>
                    }

                    <button
                        type="submit"
                        className="btn btn-success"
                        onClick={enviarTaller}>
                        {actualTaller.id > 0 ?
                            <span>Actualizar</span>
                            :
                            <span>Añadir</span>
                        }
                    </button>

                    <Link
                        to={"/talleres"} className="btn btn-success">
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






