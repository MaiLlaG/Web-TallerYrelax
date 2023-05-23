
/*
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import TallerDataService from "../services/TallerDataService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
                <div className="form">
                    <form>
                        <h4>Taller</h4>
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
                                    <div className="d-flex flex-wrap flex-column align-content-center">
                                        <img className="w-circle-img mt-4 rounded rounded-circle" src={`data:image/jpeg;base64,${actualTaller.imagen}`} alt={actualTaller.nombre} />
                                    </div>
                                :
                                <div className="d-flex flex-wrap flex-column align-content-center">
                                    <img className="w-circle-img mt-4 rounded rounded-circle" src={require("../img/sin-imagen.png")} alt={actualTaller.nombre} />
                                </div>
                            }
                        </div>
                        <p>{message}</p>
                        <button
                            className="btn btn-primary font-500 rounded-0 p-2 mt-3 mb-3 w-bt-47"
                            type="button"
                            onClick={enviarTaller}>
                            {actualTaller.id > 0 ?
                                <span>Actualizar</span>
                                :
                                <span>Añadir</span>
                            }
                        </button>
                        {actualTaller.id > 0 ?
                            <button
                                className="btn btn-dark border-white mt-2 mb-3 rounded-0 min-w-bt-27"
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
                    </form>
                </div>
            ) : (
                <div>
                    <p className="font-Raleway letter-spacing-2 fw-bold">Haz click en un taller...</p>
                </div>
            )}
        </div>
    );
};
export default Taller;
*/



import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import TallerDataService from "../services/TallerDataService";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import '../App.css';
import '../index.css';
import Alert from "./Alert";

registerLocale("es", es); // Para poner idioma español en el DatePicker

const Taller = () => {
    const { id } = useParams();
    let navigate = useNavigate();

    const tallerState = {
        id: null,
        nombre: "",
        descripcion: "",
        precio: null,
        durasemanas: null,
        diasxsemana: null,
        nplazas: null,
        plazasCompradas: null,
        fechainicio: null,
        dificultad: "",
        imagen: null
    };

    const [actualTaller, setActualTaller] = useState(tallerState); // Validaciones: No llamo directamente, si no a través de setActualTallerConValidacion
    const [message, setMessage] = useState("");
    const [errores, setErrores] = useState({});// Validaciones: Errores
    const [alertText, setAlertText] = useState("");

    // Validaciones: Comprobar errores al cambiar el estado
    const setActualTallerConValidacion = elTaller => {
        setActualTaller(elTaller);

        validarFormulario(elTaller);
    };

    const validarFormulario = elTaller => {
        
        const errores = {};
        let hayErrores = false;

        console.log("Validando...");
        console.log(elTaller);

        if (estaVacio(elTaller.nombre)) {
            errores.nombre = 'Es obligatorio especificar un nombre.';
            hayErrores = true;
        }

        if (estaVacio(elTaller.descripcion)) {
            errores.descripcion = 'Es obligatorio especificar una descripción';
            hayErrores = true;
        }

        if (noEsEntero(elTaller.precio)) {
            errores.precio = 'Es obligatorio especificar un precio';
            hayErrores = true;
        }

        if (noEsEntero(elTaller.durasemanas)) {
            errores.durasemanas = 'Es obligatorio especificar las semanas de duración';
            hayErrores = true;
        }

        if (noEsEntero(elTaller.diasxsemana)) {
            errores.diasxsemana = 'Es obligatorio especificar cuantos días a la semana se imparte';
            hayErrores = true;
        }

        if (noEsEntero(elTaller.nplazas)) {
            errores.nplazas = 'Es obligatorio especificar el número de plazas';
            hayErrores = true;
        }

        if (noEsEntero(elTaller.plazasCompradas)) {
            errores.plazasCompradas = 'Es obligatorio especificar las plazas ya compradas';
            hayErrores = true;
        }

        if (elTaller.fechainicio === null) {
            errores.fechainicio = 'Es obligatorio especificar la fecha de inicio';
            hayErrores = true;
        }

        if (estaVacio(elTaller.dificultad)) {
            errores.dificultad = 'Es obligatorio especificar el nivel de dificultad';
            hayErrores = true;
        }

        if (elTaller.id > 0){
            // No requerida imagen en los talleres ya creados
        }else{
            if (elTaller.imagen == null){
                errores.imagen = 'Es obligatorio indicar una imagen';
            }
        }

        setErrores(errores);
        return hayErrores;
    };

    const noEsEntero = valor => {
        return (!/^\d+$/.test(valor));
    }
    const estaVacio = valor => {
        return (valor == null || valor.trim() === '');
    }

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
        setActualTallerConValidacion({ ...actualTaller, [name]: value });
    };

    const selectFile = event => {
        setActualTallerConValidacion({ ...actualTaller, ["imagen"]: event.target.files[0] });
    }

    const fechaInicioChanged = fecha => {
        setActualTallerConValidacion({ ...actualTaller, ["fechainicio"]: fecha });
    };

    const enviarTaller = () => {
        // Validaciones: Si hay errores no dejo enviar
        if (validarFormulario(actualTaller)) {
            console.log('Formulario no válido');
            setAlertText('Corrige los errores antes de enviar');
            //alert('Corrige los errores antes de enviar');
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
        <Alert alertText={alertText} setAlertText={setAlertText} />
            <div className="min-height-85">
                {actualTaller ? (
                    <div className="form p-3">
                        <form>
                            <div className="form-group d-flex flex-wrap flex-column align-content-center mt-1 p-3">
                                <h4 className="max-w-35 w-40 font-Raleway letter-spacing-2 fs-4 fw-bold mb-4">Taller</h4>
                               
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
                                    {errores.nombre && <span className="text-danger text-valida fw-light">{errores.nombre}</span>}
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
                                    {errores.descripcion && <span className="text-danger text-valida fw-light">{errores.descripcion}</span>}
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
                                    {errores.precio && <span className="text-danger text-valida fw-light">{errores.precio}</span>}
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
                                    {errores.durasemanas && <span className="text-danger text-valida fw-light">{errores.durasemanas}</span>}
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
                                    {errores.diasxsemana && <span className="text-danger text-valida fw-light">{errores.diasxsemana}</span>}
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
                                    {errores.nplazas && <span className="text-danger text-valida fw-light">{errores.nplazas}</span>}
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
                                    {errores.plazasCompradas && <span className="text-danger text-valida fw-light">{errores.plazasCompradas}</span>}
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
                                    {errores.fechainicio && <span className="text-danger text-valida fw-light">{errores.fechainicio}</span>}
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
                                    {errores.dificultad && <span className="text-danger text-valida fw-light">{errores.dificultad}</span>}
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
                                            <div className="d-flex flex-wrap flex-column align-content-center">
                                                <img className="w-circle-img mt-4 rounded rounded-circle" src={`data:image/jpeg;base64,${actualTaller.imagen}`} alt={actualTaller.nombre} />
                                            </div>
                                        :
                                        <div className="d-flex flex-wrap flex-column align-content-center">
                                            <img className="w-circle-img mt-4 rounded rounded-circle" src={require("../img/sin-imagen.png")} alt={actualTaller.nombre} />
                                        </div>
                                    }
                                    {errores.imagen && <span className="text-danger text-valida fw-light">{errores.imagen}</span>}
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
                                        className="btn btn-dark border-white mt-2 mb-3 rounded-0 min-w-bt-27"
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
                        <p className="font-Raleway letter-spacing-2 fw-bold">Haz click en un taller...</p>
                    </div>
                )}
            </div>
        </main>
    );
};
export default Taller;  






