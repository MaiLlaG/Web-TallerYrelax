import React, { useState } from "react";
import { Link } from "react-router-dom";
import TallerDataService from "../services/TallerDataService";
import '../App.css';
import '../index.css';
import '../views/TallerAdd.css';

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
    const selectFile = event => {
        console.log(event.target.files[0]);
        setTaller({ ...taller, ["imagen"]: event.target.files[0] });
    }

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
                    <h4>Añadido correctamente</h4>
                    <button className="btn btn-success" onClick={nuevoTaller}>
                        <span>Añadir-Taller</span>
                    </button>
                    <Link
                        to={"/talleres/"} className="btn btn-success">
                        Volver
                    </Link>
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
                        {taller.imagen ?
                            typeof taller.imagen.name == 'string' ?
                                <p>Seleccionada: {taller.imagen.name}</p>
                                :
                                <img src={`data:image/jpeg;base64,${taller.imagen}`} alt={taller.nombre} />
                            :
                            <img src={require("../img/taller-sin-imagen.png")} alt={taller.nombre} />
                        }
                    </div>

                    <button
                        type="submit"
                        className="btn btn-success"
                        onClick={salvarTaller}>
                        <span>Guardar Taller</span>
                    </button>

                    <Link
                        to={"/talleres/"} className="btn btn-success">
                        Volver
                    </Link>

                </div>
            )}
        </div>
    );
};
export default TallerAdd;