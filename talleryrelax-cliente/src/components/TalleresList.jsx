import React, { useState, useEffect, useContext } from "react";
import TallerDataService from "../services/TallerDataService";
import { Link } from "react-router-dom";
import '../App.css';
import '../index.css';
import '../views/TalleresList.css';
import UsuarioContext from "./Usuario";

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

    const usuario = useContext(UsuarioContext);


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

            <main className="colorArena">
                {actualTaller ? (
                    <div>
                        <div className="contenedorTallerColor">
                            <div className="infoTallerColor coverColor">
                                <div className="textoEncuadrado">
                                    <div>
                                        <label>
                                            <h2>{actualTaller.nombre}</h2>
                                        </label>
                                    </div>
                                    <hr className="linea" />
                                    <div>
                                        <label>
                                            <p className="textoInfoColor align_text_Izq">
                                                {actualTaller.descripcion}
                                            </p>
                                        </label>
                                    </div>
                                    <hr className="linea" />
                                    <div>
                                        <label>
                                            <p className="textoInfoColor align_text_Izq">Precio: {actualTaller.precio}</p>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <p className="textoInfoColor textoIzquierda">Semanas de duración: {actualTaller.durasemanas}</p>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <p className="textoInfoColor textoIzquierda">Días a la semana: {actualTaller.diasxsemana}</p>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <p className="textoInfoColor align_text_Izq">Número de plazas: {actualTaller.nplazas}</p>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <p className="textoInfoColor align_text_Izq">Plazas compradas: {actualTaller.plazasCompradas}</p>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <p className="textoInfoColor align_text_Izq">Fecha de inicio: {actualTaller.fechainicio}</p>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <p className="textoInfoColor align_text_Izq">Dificultad: {actualTaller.dificultad}</p>
                                        </label>
                                    </div>
                                    <hr className="linea" />
                                </div>
                            </div>
                            <div className="colorFondoTallerColor">
                                <img className="imgDetalle" src={require("../img/Origami4.png")} alt={actualTaller.nombre} />
                            </div>
                        </div>
                        <div>
                            <div className="infoTallerColor">
                                {usuario.user ?
                                    (actualTaller.nplazas - actualTaller.plazasCompradas > 0) ?
                                        <Link to={"/compras/" + actualTaller.id} className="nav-link btn btn-4 btn-holder hover-border-7">
                                            Comprar
                                        </Link>
                                        :
                                        <div>
                                            <label>
                                                <p className="textoInfoRojo textoEncuadrado margin_left">No quedan plazas</p>
                                            </label>
                                        </div>
                                    :
                                    <div>
                                        <label>
                                            <p className="textoEncuadrado align_text_Izq margin_left">Autentícate para poder comprar</p>
                                        </label>
                                    </div>
                                }


                                <Link
                                    onClick={() => setActiveTaller(null, -1)} className="margin_btn_volver btn-4 btn-holder hover-border-7">
                                    Volver
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (

                    <div className="">
                        <div className="division3partes">
                            <div className="seccionIzquierda"></div>
                            <div className="talleres">
                                {talleres && talleres.map((taller, index) => (

                                    <div className="CirculosAbajo" onClick={() => setActiveTaller(taller, index)} key={index}>
                                        <figure className="snip1566">
                                            {taller.imagen ?
                                                <img src={`data:image/jpeg;base64,${taller.imagen}`} alt={taller.nombre} />
                                                :
                                                <img src={require("../img/tallerPanaderia74.jpg")} alt={taller.nombre} />
                                            }
                                            <figcaption>
                                                <h1 className="circuloText">{taller.nombre}</h1>
                                            </figcaption>
                                            <a href="#"></a>
                                        </figure>
                                    </div>

                                ))}

                            </div>
                            <div className="seccionDerecha"></div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default TalleresList;