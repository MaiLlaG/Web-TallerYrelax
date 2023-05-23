import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import MensajeDataService from '../services/MensajeDataService'
import '../App.css';
import '../index.css';

const Contacto = () => {
    const contactoState = {
        id: null,
        nombre: "",
        email: "",
        telefono: "",
        texto: "",
    };

    const [contacto, setContacto] = useState(contactoState);
    const [submitted, setSubmitted] = useState(false);
    const [errores, setErrores] = useState({});// Validaciones: Errores

    // Validaciones: Comprobar errores al cambiar el estado
    const setContactoConValidacion = elContacto => {
        setContacto(elContacto);

        const errores = {};

        console.log("Validando...");
        console.log(elContacto);

        if (elContacto.nombre.trim() === '') {
            errores.nombre = 'Es obligatorio especificar un nombre';
        }

        if (elContacto.email.trim() === '') {
            errores.email = 'Es obligatorio especificar un email';
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            errores.email = 'El email ingresado no es válido';
        }

        if (elContacto.telefono.trim() === '') {
            errores.telefono = 'Es obligatorio especificar un teléfono';
        } else if (!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(telefono)) {
            errores.telefono = 'El teléfono ingresado no es válido';
        }

        if (elContacto.texto.trim() === '') {
            errores.texto = 'Es obligatorio ingresar un mensaje';
        }

        setErrores(errores);
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setContactoConValidacion({ ...contacto, [name]: value });
    };

    const entrarContacto = () => {
        var data = {
            nombre: contacto.nombre,
            email: contacto.email,
            telefono: contacto.telefono,
            texto: contacto.texto,
        };
    };

    const enviar = () => {
        MensajeDataService.create(contacto)
            .then(response => {
                console.log(response.data);
                alert("Mensaje enviado ok!");
            })
            .catch(e => {
                alert('Error al enviar el mensaje');
                console.log(e);
            });
    };

    return (
        <div className="d-flex">
            <main className="w-100 p-0">
                <div className="container-fluid row min-height-85 p-0 m-0 d-flex justify-content-evenly">

                    <div className="col-md-6 ps-0 bg-arena text-light d-flex justify-content-center">
                        <h4 className="letter-spacing-2 ms-1 fs-4 fw-bold mb-4">Otros métodos de contacto</h4>

                        <div className="d-flex flex-wrap flex-column align-items-center ">
                            <div>
                                <p className="text-y font-Raleway letter-spacing-2">Teléfono: </p>
                            </div>
                            <div>
                                <p className="text-secondary font-Raleway letter-spacing-2">Donde estamos: </p>
                            </div>
                            <div className="d-flex justify-content-center">
                                {/*<img className="imgMandala" src={require("../img/flowerMandalaOpacityV.png")} />*/}
                            </div>
                        </div>

                    </div>

                    <div className="col-md-6 bg-dark pe-0 form">
                        <form>
                            <div className="form-group d-flex flex-wrap flex-column align-content-center mt-4 p-3">
                                <h4 className="text-white text-white letter-spacing-2 fs-4 fw-bold mb-4">Contacto</h4>

                                <div className="form-group my-3">
                                    <label className="text-white font-Raleway-bold letter-spacing-2 mb-1" htmlFor="nombre">Nombre <span className="fw-bold"> *</span></label>
                                    <input
                                        className="text-light form-control input-padding font-Raleway"
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        required
                                        value={contacto.nombre}
                                        onChange={handleInputChange}
                                    />
                                    {errores.nombre && <span className="text-primary text-valida fw-light">{errores.nombre}</span>}
                                </div>

                                <div className="form-group my-3">
                                    <label className="text-white font-Raleway-bold letter-spacing-2 mb-1" htmlFor="email">Email <span className="fw-bold"> *</span></label>
                                    <input
                                        className="text-light form-control input-padding font-Raleway"
                                        type="text"
                                        id="email"
                                        name="email"
                                        required
                                        value={contacto.email}
                                        onChange={handleInputChange}
                                    />
                                    {errores.email && <span className="text-primary text-valida fw-light">{errores.email}</span>}
                                </div>

                                <div className="form-group my-3">
                                    <label className="text-white font-Raleway-bold letter-spacing-2 mb-1" htmlFor="telefono">Teléfono <span className="fw-bold"> *</span></label>
                                    <input
                                        className="text-light form-control input-padding font-Raleway"
                                        type="text"
                                        id="telefono"
                                        name="telefono"
                                        required
                                        value={contacto.telefono}
                                        onChange={handleInputChange}
                                    />
                                    {errores.telefono && <span className="text-primary text-valida fw-light">{errores.telefono}</span>}
                                </div>

                                <div className="form-group my-3">
                                    <label className="text-white font-Raleway-bold letter-spacing-2 fs-6" htmlFor="texto">Mensaje He leído y acepto las Condiciones de Compra <span className="fw-bold"> *</span></label>
                                    <textarea
                                        className="text-light form-control bg-transparent font-Raleway mt-2 mb-1" rows="7"
                                        type="text"
                                        id="texto"
                                        name="texto"
                                        required
                                        value={contacto.texto == null ? "" : contacto.texto}
                                        onChange={handleInputChange}
                                    />
                                    {errores.texto && <span className="text-primary text-valida fw-light">{errores.texto}</span>}
                                </div>

                                <button
                                    className="btn btn-primary border-white mt-2 mb-3 rounded-0 min-w-bt-27"
                                    type="submit"
                                    onClick={enviar}>
                                    <span className="font-Raleway letter-spacing-2">Enviar</span>
                                </button>

                                <Link
                                    to={"/"}
                                    className="btn btn-outline-light border-white mt-2 mb-3 rounded-0 min-w-bt-27">
                                    <span className="font-Raleway-bold letter-spacing-2">Volver</span>
                                </Link>

                            </div>

                        </form>
                    </div>
                </div>
            </main>
        </div>
    );

};

export default Contacto;