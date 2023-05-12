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

            <div className="">
                {actualTaller ? (
                    <div>
                        <h4>Taller</h4>
                        <div class="contenedorTallerBlanco">
                            <div className="infoTallerColor">
                                <div>
                                    <label>
                                        <strong className="textoInfoColor textoInfo">Nombre:</strong>
                                    </label>
                                    {actualTaller.nombre}
                                </div>
                                <div>
                                    <label>
                                        <strong className="textoInfoColor textoInfo">Descripcion:</strong>
                                        <p className="textoInfoColor textoDerecha">
                                            {actualTaller.descripcion}
                                        </p>
                                    </label>
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

                            </div>
                            <div>
                                IMAGENES
                            </div>
                        </div>


                        {usuario.user ?
                            (actualTaller.nplazas - actualTaller.plazasCompradas > 0) ?
                                <Link to={"/compras/" + actualTaller.id} className="nav-link btn btn-4 btn-holder hover-border-7">
                                    Comprar
                                </Link>
                                :
                                <div>No quedan plazas</div>
                            :
                            <div>Autentícate para poder comprar</div>
                        }

                        <Link
                            onClick={() => setActiveTaller(null, -1)} className="btn btn-4 btn-holder hover-border-7">
                            Volver
                        </Link>
                    </div>
                ) : (

                    <div className="">
                        <div class="division3partes">
                            <div className="seccionIzquierda"></div>
                            <div className="talleres">
                                {talleres && talleres.map((taller, index) => (

                                    <div className="CirculosAbajo" onClick={() => setActiveTaller(taller, index)} key={index}>
                                        <figure className="snip1566">
                                            {taller.imagen?
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
            </div>
        </div>
    );
};

export default TalleresList;