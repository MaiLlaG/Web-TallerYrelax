import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import MensajeDataService from "../services/MensajeDataService";
import { Link } from "react-router-dom";
import '../App.css';
import '../index.css';

const MensajesList = () => {
    const { id } = useParams();
    let navigate = useNavigate();

    const mensajeState = {
        id: null,
        nombre: "",
        email: "",
        texto: "",
        fecha: null
        //submitted: false
    };

    const [mensajes, setMensajes] = useState([]);
    const [actualMensaje, setActualMensaje] = useState(mensajeState);
    const [actualIndex, setActualIndex] = useState(-1);

    const getMensaje = id => {
        MensajeDataService.get(id)
            .then(response => {
                setActualMensaje(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        if (id)
            getMensaje(id);
    }, [id]);


    useEffect(() => {
        recuperarMensajes();
    }, []);

    const recuperarMensajes = () => {
        MensajeDataService.getAll()
            .then(response => {
                setMensajes(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const setActiveMensaje = (mensaje, index) => {
        setActualMensaje(mensaje);
        setActualIndex(index);
    };

    return (
        <div className="container-fluid row min-height-85 pt-3 d-flex justify-content-evenly gap-1">
            <div className="col-md-4 px-3">
                <h4 className="font-Raleway letter-spacing-2 ms-1 fs-4 fw-bold mb-4">Lista de mensajes de <span className="text-primary fw-normal">Contacto</span></h4>
                <ul className="list-group shadow rounded-5 mb-3 font-Raleway-bold letter-spacing-2">
                    {mensajes && mensajes.map((mensaje, index) => (
                        <li
                            className={
                                "py-3 px-4 list-group-item list-group-item-action list-group-flush " + (index === actualIndex ? "active" : "")
                            }
                            onClick={() => setActiveMensaje(mensaje, index)} key={index}>
                            {mensaje.nombre}
                        </li>
                    )).reverse()}
                </ul>
            </div>

            <div className="col-md-5 d-flex justify-content-center ms-2 px-3 pb-1">
                {actualMensaje ? (
                    <div className="w-75">
                        <h4 className="font-Raleway letter-spacing-2 fs-4 fw-bold mb-4">Mensaje</h4>
                        <div>
                            <label>
                                <p className="text-secondary font-Raleway letter-spacing-2">Nombre: </p>
                            </label>
                            <p className="mb-4 text-black font-Raleway letter-spacing-2 fs-6">{actualMensaje.nombre}</p>
                        </div>

                        <div>
                            <label>
                                <p className="text-secondary font-Raleway letter-spacing-2">Fecha: </p>
                            </label>
                            <p className="mb-4 text-black font-Raleway letter-spacing-2 fs-6">{actualMensaje.fecha}</p>
                        </div>

                        <div>
                            <label>
                                <p className="text-secondary font-Raleway letter-spacing-2">Email: </p>
                            </label>
                            <p className="mb-4 text-black font-Raleway letter-spacing-2 fs-6">{actualMensaje.email}</p>
                        </div>

                        <div>
                            <label>
                                <p className="text-secondary font-Raleway letter-spacing-2">Mensaje: </p>
                                <hr className="hr-with" />
                            </label>
                            <p className="mb-3 text-black font-Raleway fs-6">{actualMensaje.texto}</p>
                            <hr className="hr-with" />
                        </div>

                        <div className="d-flex justify-content-center gap-2">
                            <Link
                                to={"/gestion"} className="btn btn-outline-light border-dark text-black mt-3 mb-3 rounded-0 min-w-bt-27">
                                <span className="font-Raleway-bold letter-spacing-2">Volver</span>
                            </Link>
                        </div>

                    </div>
                ) : (
                    <div>
                        <br />
                        <p className="font-Raleway letter-spacing-2 fw-bold">Haz click en un mensaje...</p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default MensajesList;