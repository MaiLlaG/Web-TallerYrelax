import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import '../App.css';
import '../index.css';

const Contacto = () => {
    const contactoState = {
        id: null,
        nombre: "",
        email: "",
        telefono: "",
        texto: "",
        //submitted: false
    };

    const [contacto, setContacto] = useState(contactoState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setContacto({ ...contacto, [name]: value });
    };

    const entrarContacto = () => {
        var data = {
            nombre: contacto.nombre,
            email: contacto.email,
            telefono: contacto.telefono,
            texto: contacto.texto,
        };
    };

    return (
        <div className="submit-form">
            <div className="contentPaneles">
                <div>
                </div>

                <div className="paneles">
                    <div className="panelIzq">
                        <div className="contacto">Contacto</div>
                    </div>
                    <div className="panelDer">
                        <div className="">
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input
                                    type="text"
                                    className=""
                                    id="nombre"
                                    required
                                    value={contacto.nombre}
                                    onChange={handleInputChange}
                                    name="nombre"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    className=""
                                    id="email"
                                    required
                                    value={contacto.email}
                                    onChange={handleInputChange}
                                    name="email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="telefono">Teléfono</label>
                                <input
                                    type="text"
                                    className=""
                                    id="telefono"
                                    required
                                    value={contacto.telefono}
                                    onChange={handleInputChange}
                                    name="telefono"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="texto">Texto</label>
                                <textarea
                                    type="text"
                                    className=""
                                    id="texto"
                                    required
                                    value={contacto.texto}
                                    onChange={handleInputChange}
                                    name="texto"
                                ></textarea>
                                <p>TODO: FALTA AÑADIR AQUÍ EL ENVÍO</p>
                                <Link
                                    to={"/"} className="btn btn-4 btn-holder hover-border-7">
                                    Volver
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );


};

export default Contacto;