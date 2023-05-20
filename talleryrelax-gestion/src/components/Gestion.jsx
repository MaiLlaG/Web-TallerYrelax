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

        <main className="bg-white p-0">
            <div className="container min-height-85 bg-white">
                <div className="thumbex">
                    <div className="thumbnail divFondo1">
                        <img className="img-clientes" src={require("../img/Esculturasdepapel28.jpg")} />
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
                        <img className="img-talleres" src={require("../img/tallerPanaderia68.jpg")} />
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
                        <img src={require("../img/kintsugi24.jpg")} />
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



                <div className="w-100 mt-4 d-flex flex-wrap align-items-center justify-content-evenly">
                    <div className="d-flex flex-wrap flex-row align-items-end">
                        <Link
                            to={"/mensajes"}>
                            <img className="mt-3 iconoEmail" src={require("../img/email.png")} alt="iconoEmail" />
                        </Link>
                        <Link
                            to={"/mensajes"}>
                            <p className="text-black texto-mensajes">Mensajes de <span className="font-weight-600">Contacto</span></p>
                        </Link>
                    </div>

                    <Link
                        to={"/"}
                        className="btn btn-outline-light border-dark text-black font-500 border rounded-0 p-2 mt-4 mb-3 mx-3 min-w-bt-27">
                        <span className="font-Raleway-bold letter-spacing-2">Volver</span>
                    </Link>
                </div>

            </div>
        </main>
    );

};


export default Gestion;