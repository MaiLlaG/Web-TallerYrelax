import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import TallerDataService from "../services/TallerDataService";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import '../App.css';
import '../index.css';
import '../views/Taller.css';

registerLocale("es", es); // Para poner idioma español en el DatePicker

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

    const [actualTaller, setActualTaller] = useState(tallerState); // Validaciones: No llamo directamente, si no a través de setActualTallerConValidacion
    const [message, setMessage] = useState("");
    const [errores, setErrores] = useState({});// Validaciones: Errores

    // Validaciones: Comprobar errores al cambiar el estado
    const setActualTallerConValidacion = elTaller => {
        setActualTaller(elTaller);        
        
        const errores = {};

        console.log("Validando...");
        console.log(elTaller);
        if (elTaller.nombre.trim() === '') {
            errores.nombre = 'El nombre es requerido';
        }
        if (elTaller.fechainicio === null) {
            errores.fechainicio = 'La fecha de inicio es requerida';
        }

        // Resto de validaciones

        setErrores(errores);
    };

    const getTaller = id => {
        TallerDataService.get(id)
            .then(response => {
                response.data.fechainicio = response.data.fechainicio != null ? new Date(response.data.fechainicio + ".000Z") : null;
                setActualTallerConValidacion(response.data);
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
        setActualTallerConValidacion({ ...actualTaller, [name]: value });
    };

    const selectFile = event => {
        //console.log(event.target.files[0]);
        setActualTallerConValidacion({ ...actualTaller, ["imagen"]: event.target.files[0] });
    }

    const fechaInicioChanged = fecha => {
        //console.log(fecha.toISOString());
        setActualTallerConValidacion({ ...actualTaller, ["fechainicio"]: fecha });
    };

    const enviarTaller = () => {
        // Validaciones: Si hay errores no dejo enviar
        if (Object.keys(errores).length > 0) {
            console.log('Formulario no válido');
            alert('Corrige los errores antes de enviar');
            return;
        } 

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
        <main className="bg-white winter-neva-gradient color-block p-0">
            <div className="min-height-85">
                {actualTaller ? (
                    <div className="form p-3">
                        <form>
                            <div className="form-group form-group-width d-flex flex-wrap flex-column align-content-center mt-1 p-3">
                                <h4 className="font-Raleway letter-spacing-2 fs-4 fw-bold mb-4">Taller</h4>
                                <div className="form-group my-3">
                                    <label className="font-Raleway-bold letter-spacing-2" htmlFor="nombre">Nombre</label>
                                    <input
                                        className="form-control input-padding font-Raleway"
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        value={actualTaller.nombre}
                                        onChange={handleInputChange}
                                    />
                                    {errores.nombre && <span>{errores.nombre}</span>}
                                </div>
                                <div className="form-group my-3">
                                    <label className="font-Raleway-bold letter-spacing-2 mb-3" htmlFor="descripcion">Descripción</label>
                                    <textarea
                                        className="form-control bg-transparent font-Raleway mb-1" rows="7"
                                        type="text"
                                        id="descripcion"
                                        name="descripcion"
                                        value={actualTaller.descripcion == null ? "" : actualTaller.descripcion}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group my-3">
                                    <label className="font-Raleway-bold letter-spacing-2" htmlFor="precio">Precio</label>
                                    <input
                                        className="form-control input-padding font-Raleway"
                                        type="text"
                                        id="precio"
                                        name="precio"
                                        value={actualTaller.precio}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group my-3">
                                    <label className="font-Raleway-bold letter-spacing-2" htmlFor="durasemanas">Semanas de duración</label>
                                    <input
                                        className="form-control input-padding font-Raleway"
                                        type="text"
                                        id="durasemanas"
                                        name="durasemanas"
                                        value={actualTaller.durasemanas}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group my-3">
                                    <label className="font-Raleway-bold letter-spacing-2" htmlFor="diasxsemana">Días a la semana</label>
                                    <input
                                        className="form-control input-padding font-Raleway"
                                        type="text"
                                        id="diasxsemana"
                                        name="diasxsemana"
                                        value={actualTaller.diasxsemana}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group my-3">
                                    <label className="font-Raleway-bold letter-spacing-2" htmlFor="nplazas">Número de plazas</label>
                                    <input
                                        className="form-control input-padding font-Raleway"
                                        type="text"
                                        id="nplazas"
                                        name="nplazas"
                                        value={actualTaller.nplazas}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group my-3">
                                    <label className="font-Raleway-bold letter-spacing-2" htmlFor="plazasCompradas">Plazas compradas</label>
                                    <input
                                        className="form-control input-padding font-Raleway"
                                        type="text"
                                        id="plazasCompradas"
                                        name="plazasCompradas"
                                        value={actualTaller.plazasCompradas}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group my-3">
                                    <label className="font-Raleway-bold letter-spacing-2" htmlFor="fechainicio">Fecha de inicio</label>
                                    <DatePicker
                                        className="form-control font-Raleway"
                                        type="date"
                                        id="fechainicio"
                                        locale={es}
                                        selected={actualTaller.fechainicio} onChange={(date) => fechaInicioChanged(date)}
                                    />                                    
                                    { errores.fechainicio && <span>{ errores.fechainicio}</span>}
                                </div>
                                <div className="form-group my-3">
                                    <label className="font-Raleway-bold letter-spacing-2" htmlFor="dificultad">Dificultad</label>
                                    <input
                                        className="form-control input-padding font-Raleway"
                                        type="text"
                                        id="dificultad"
                                        name="dificultad"
                                        value={actualTaller.dificultad}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group my-3">
                                    <label className="font-Raleway-bold letter-spacing-2 mb-3" htmlFor="imagen">Imagen</label>
                                    <input
                                        className="form-control font-Raleway"
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
                                            <div className="d-flex flex-column align-content-center">
                                                <img className="w-75 mt-4 ms-5 rounded rounded-circle" src={`data:image/jpeg;base64,${actualTaller.imagen}`} alt={actualTaller.nombre} />
                                            </div>
                                        :
                                        <div className="d-flex flex-column align-content-center">
                                            <img className="w-50 mt-4 ms-5 rounded rounded-circle" src={require("../img/sin-imagen.png")} alt={actualTaller.nombre} />
                                        </div>
                                    }
                                </div>

                                <p>{message}</p>

                                <button
                                    className="btn btn-primary border-dark mt-2 mb-3 rounded-0 min-w-bt-27"
                                    type="button"
                                    onClick={enviarTaller}>
                                    {actualTaller.id > 0 ?
                                        <span className="font-Raleway letter-spacing-2">Actualizar</span>
                                        :
                                        <span className="font-Raleway letter-spacing-2">Añadir</span>
                                    }
                                </button>

                                {actualTaller.id > 0 ?
                                    <button
                                        className="btn btn-dark border-dark mt-2 mb-3 rounded-0 min-w-bt-27"
                                        type="button"
                                        onClick={eliminarTaller}>
                                        <span className="font-Raleway letter-spacing-2">Eliminar</span>
                                    </button>
                                    :
                                    <span></span>
                                }

                                <Link
                                    to={"/talleres"}
                                    className="btn btn-outline-light border-dark text-black mt-2 mb-3 rounded-0 min-w-bt-27">
                                    <span className="font-Raleway-bold letter-spacing-2">Volver</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Haz click en un taller...</p>
                    </div>
                )}
            </div>
        </main>
    );
};
export default Taller;






