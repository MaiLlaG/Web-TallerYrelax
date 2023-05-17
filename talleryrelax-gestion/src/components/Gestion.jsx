import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import '../App.css';
import '../index.css';
import '../views/Gestion.css';
//import style from './Gestion.module.css';
//alt={actualTaller.nombre}

const Gestion = () => {


    return (

        <main className="bg-white">
            <div className="container min-height-85 bg-white">
                <div className="thumbex">
                    <div className="thumbnail divFondo1">
                        <img src={require("../img/Esculturasdepapel28.jpg")} />
                        <span>
                            <Link
                                to={"/clientes"}>
                                <div className="form-group">
                                    <p className="textoEnlace">Clientes</p>
                                </div>
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="thumbex">
                    <div className="thumbnail divFondo2">
                        <img src={require("../img/tallerPanaderia47.jpg")} />
                        <span>
                            <Link
                                to={"/talleres"}>
                                <div className="form-group">
                                    <p className="textoEnlace">Talleres</p>
                                </div>
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="thumbex">
                    <div className="thumbnail divFondo3">
                        <img src={require("../img/tallerPanaderia68.jpg")} />
                        <span>
                            <Link
                                to={"/trabajadores"}>
                                <div className="form-group">
                                    <p className="textoEnlace">Personal</p>
                                </div>
                            </Link>
                        </span>
                    </div>
                </div>

                <Link
                    to={"/"}
                    className="btn btn-muted btn-link font-500 border border-black rounded-0 p-2 mt-4 mb-3 w-bt-47">
                    <span className=""><u>Volver</u></span>
                </Link>
            </div>
        </main>
    );

};


export default Gestion;