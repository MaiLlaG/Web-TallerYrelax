import React, { useState } from "react";
import { Link } from "react-router-dom";
import TallerDataService from "../services/TallerService";
import '../App.css';
import '../index.css';

const TallerAdd = () => {
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
        //submitted: false
    };

    const [taller, setTaller] = useState(tallerState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setTaller({ ...taller, [name]: value });
    };

    const salvarTaller = () => {
        var data = {
            nombre: taller.nombre,
            descripcion: taller.descripcion,
            precio: taller.precio,
            durasemanas: taller.durasemanas,
            diasxsemana: taller.diasxsemana,
            nplazas: taller.nplazas,
            plazasCompradas: taller.plazasCompradas,
            fechainicio: taller.fechainicio,
            dificultad: taller.dificultad,
            imagen: taller.imagen,
        };

        TallerDataService.create(data)
            .then(response => {
                setTaller({
                    id: response.data.id,
                    nombre: response.data.nombre,
                    descripcion: response.data.descripcion,
                    precio: response.data.precio,
                    durasemanas: response.data.durasemanas,
                    diasxsemana: response.data.diasxsemana,
                    nplazas: response.data.nplazas,
                    plazasCompradas: response.data.plazasCompradas,
                    fechainicio: response.data.fechainicio,
                    dificultad: response.data.dificultad,
                    imagen: response.data.imagen,
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const nuevoTaller = () => {
        setTaller(tallerState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>Creado correctamente</h4>
                    <button className="btn btn-4 btn-holder hover-border-7" onClick={nuevoTaller}>
                        Añadir-Taller
                    </button>
                </div>
            ) : (
                <div>
                    <h4>Taller</h4>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            required
                            value={taller.nombre}
                            onChange={handleInputChange}
                            name="nombre"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descripcion">Descripcion</label>
                        <input
                            type="text"
                            className="form-control"
                            id="descripcion"
                            required
                            value={taller.descripcion}
                            onChange={handleInputChange}
                            name="descripcion"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="precio">Precio</label>
                        <input
                            type="text"
                            className="form-control"
                            id="precio"
                            required
                            value={taller.precio}
                            onChange={handleInputChange}
                            name="precio"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="durasemanas">Semanas de duración</label>
                        <input
                            type="text"
                            className="form-control"
                            id="durasemanas"
                            required
                            value={taller.durasemanas}
                            onChange={handleInputChange}
                            name="durasemanas"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="diasxsemana">Días a la semana</label>
                        <input
                            type="text"
                            className="form-control"
                            id="diasxsemana"
                            required
                            value={taller.diasxsemana}
                            onChange={handleInputChange}
                            name="diasxsemana"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nplazas">Número de plazas</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nplazas"
                            required
                            value={taller.nplazas}
                            onChange={handleInputChange}
                            name="nplazas"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="plazasCompradas">Plazas compradas</label>
                        <input
                            type="text"
                            className="form-control"
                            id="plazasCompradas"
                            required
                            value={taller.plazasCompradas}
                            onChange={handleInputChange}
                            name="plazasCompradas"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fechainicio">Fecha de inicio</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fechainicio"
                            required
                            value={taller.fechainicio}
                            onChange={handleInputChange}
                            name="fechainicio"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dificultad">Dificultad</label>
                        <input
                            type="text"
                            className="form-control"
                            id="dificultad"
                            required
                            value={taller.dificultad}
                            onChange={handleInputChange}
                            name="dificultad"
                        />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="imagen">Imagen</label>
                        <input
                            type="text"
                            className="form-control"
                            id="imagen"
                            required
                            value={taller.imagen}
                            onChange={handleInputChange}
                            name="imagen"
                        />
                    </div> */}

                    <button onClick={salvarTaller} className="btn btn-4 btn-holder hover-border-7">
                    <span>Guardar Taller</span>
                    </button>

                    <Link
                        to={"/talleres/"} className="btn btn-4 btn-holder hover-border-7">
                        Volver
                    </Link>

                </div>
            )}
        </div>
    );
};

export default TallerAdd;