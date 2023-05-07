import React, { useState, useEffect } from "react";
import TallerDataService from "../services/TallerDataService";
import { Link } from "react-router-dom";
import '../App.css';
import '../index.css';

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
        <div className="">
            {/* 
            <div className="">
                <div className="">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar por nombre"
                        value={buscarxNombre}
                        onChange={onChangeBuscarxNombre}
                    />
                    <div className="">
                        <button
                            className="btn"
                            type="button" onClick={findByName}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
            */}

            <div className="">
                {actualTaller ? (
                    <div>
                        <h4>Taller</h4>
                        <div>
                            <label>
                                <strong className="textoInfoColor textoInfo">Nombre:</strong>
                            </label>
                            {actualTaller.nombre}
                        </div>
                        <div className="infoTallerColor">
                            <label>
                                <strong className="textoInfoColor textoInfo">Descripcion:</strong>
                                <div>
                                    <p className="textoInfoColor textoDerecha">
                                        "Lorem ipsum dolor sit amet, consectetur
                                        adipiscing
                                        elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ea
                                        commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat
                                        nulla
                                        pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui oficia deserunt
                                        mollit
                                        anim id est laborum.
                                    </p>
                                </div>
                            </label>
                            {actualTaller.descripcion}
                        </div>
                        <div>
                            <label>
                                <strong>Precio:</strong>
                            </label>
                            {actualTaller.precio}
                        </div>
                        <div>
                            <label>
                                <strong>Semanas de duración:</strong>
                            </label>
                            {actualTaller.durasemanas}
                        </div>
                        <div>
                            <label>
                                <strong>Días a la semana:</strong>
                            </label>
                            {actualTaller.diasxsemana}
                        </div>
                        <div>
                            <label>
                                <strong>Número de plazas:</strong>
                            </label>
                            {actualTaller.nplazas}
                        </div>
                        <div>
                            <label>
                                <strong>Plazas compradas:</strong>
                            </label>
                            {actualTaller.plazasCompradas}
                        </div>
                        <div>
                            <label>
                                <strong>Fecha de inicio:</strong>
                            </label>
                            {actualTaller.fechainicio}
                        </div>
                        <div>
                            <label>
                                <strong>Dificultad:</strong>
                            </label>
                            {actualTaller.dificultad}
                        </div>


                        <div>
                            <label>
                                <strong>Imagen:</strong>
                            </label>

                            <div class="imgsmall">

                                <div class="imgresice imgSobrecapa">
                                    <img src={require("../img/Origami6.jpg")} alt="Origami2" />
                                </div>
                                <div class="imgresice">
                                    <img src="./img/Origamizorro2.jpg" alt="Origami2" />
                                </div>
                            </div>
                            <div class="imgresice">
                                <img src="./img/Origamizorro2.jpg" alt="Origami2" />
                            </div>

                            {actualTaller.imagen}
                        </div>


                        <Link to={"/compras/:id"} className="nav-link btn btn-4 btn-holder hover-border-7">
                            Comprar (TODO: SOLO MOSTRAR SI ESTÁS AUTENTICADO)
                        </Link>
                        <Link
                            onClick={() => setActiveTaller(null, -1)} className="btn btn-4 btn-holder hover-border-7">
                            Volver
                        </Link>
                    </div>
                ) : (
                    <div className="">
                        <h4>Lista de talleres</h4>
                        <ul className="">
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
                    </div>
                )}
            </div>
        </div>
    );
};

export default TalleresList;