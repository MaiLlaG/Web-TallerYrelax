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
                setMessage("El taller fue añadido correctamente");
                getTaller(response.data.id);
            })
            .catch(e => {
                console.log(e);
                setMessage("Se ha producido un error: " + e);
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
                setMessage("Se ha producido un error: " + e);
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
                setMessage("Se ha producido un error: " + e);
            });
    };

    return (
        <div className="min-height-85">
            {actualTaller ? (
                <div className="edit-form">
                    <h4>Taller</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                className="form-control"
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={actualTaller.nombre}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="descripcion">Descripción</label>
                            <input
                                className="form-control"
                                type="text"
                                id="descripcion"
                                name="descripcion"
                                value={actualTaller.descripcion}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="precio">Precio</label>
                            <input
                                className="form-control"
                                type="text"
                                id="precio"
                                name="precio"
                                value={actualTaller.precio}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="durasemanas">Semanas de duración</label>
                            <input
                                className="form-control"
                                type="text"
                                id="durasemanas"
                                name="durasemanas"
                                value={actualTaller.durasemanas}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="diasxsemana">Días a la semana</label>
                            <input
                                className="form-control"
                                type="text"
                                id="diasxsemana"
                                name="diasxsemana"
                                value={actualTaller.diasxsemana}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nplazas">Número de plazas</label>
                            <input
                                className="form-control"
                                type="text"
                                id="nplazas"
                                name="nplazas"
                                value={actualTaller.nplazas}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="plazasCompradas">Plazas compradas</label>
                            <input
                                className="form-control"
                                type="text"
                                id="plazasCompradas"
                                name="plazasCompradas"
                                value={actualTaller.plazasCompradas}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fechainicio">Fecha de inicio</label>
                            <DatePicker
                                className="form-control"
                                type="date"
                                id="fechainicio"
                                selected={actualTaller.fechainicio} onChange={(date) => fechaInicioChanged(date)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dificultad">Dificultad</label>
                            <input
                                className="form-control"
                                type="text"
                                id="dificultad"
                                name="dificultad"
                                value={actualTaller.dificultad}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="imagen">Imagen</label>
                            <input
                                className="form-control"
                                type="file"
                                id="imagen"
                                name="imagen"
                                value=""
                                onChange={selectFile}
                            />
                            {actualTaller.imagen ?
                                typeof actualTaller.imagen.name == 'string' ?
                                    <p>Seleccionada: {actualTaller.imagen.name}</p>
                                    :
                                    <div>
                                        <img src={`data:image/jpeg;base64,${actualTaller.imagen}`} alt={actualTaller.nombre} />
                                    </div>
                                :
                                <div>
                                    <img src={require("../img/taller-sin-imagen.png")} alt={actualTaller.nombre} />
                                </div>
                            }
                        </div>

                        <button
                            className="btn btn-muted font-500 border border-dark rounded-0 p-2 mt-4 mb-3 w-bt-47"
                            type="reset"
                            id="boton"
                            onClick={eliminarTaller}>
                            <span>Limpiar formulario</span>
                        </button>

                        <Link
                            to={"/talleres"}
                            className="btn btn-muted font-500 border border-dark rounded-0 p-2 mt-4 mb-3 w-bt-47">
                            <span className="text-decoration-underline">Volver</span>
                        </Link>

                    </form>

                    {actualTaller.id > 0 ?
                        <button
                            className="btn btn-primary font-500 rounded-0 p-2 mt-3 mb-3 w-bt-47"
                            type="submit"
                            onClick={eliminarTaller}>
                            <span>Eliminar</span>
                        </button>
                        :
                        <span></span>
                    }

                    <button
                        className="btn btn-primary font-500 rounded-0 p-2 mt-3 mb-3 w-bt-47"
                        type="submit"
                        onClick={enviarTaller}>
                        {actualTaller.id > 0 ?
                            <span>Actualizar</span>
                            :
                            <span>Añadir</span>
                        }
                    </button>

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






