import React, { useState } from "react";
import { Link } from "react-router-dom";
import MensajeDataService from '../services/MensajeDataService'
import '../App.css';
import '../index.css';
import Alert from "./Alert";

const Contacto = () => {
    const contactoState = {
        id: null,
        nombre: "",
        email: "",
        texto: "",
    };

    const [contacto, setContacto] = useState(contactoState);
    const [errores, setErrores] = useState({});// Validaciones: Errores
    const [alertText, setAlertText] = useState("");

    // Validaciones: Comprobar errores al cambiar el estado
    const setContactoConValidacion = elContacto => {
        setContacto(elContacto);
        validarFormulario(elContacto);
    };

    const validarFormulario = elContacto => {
        
        const errores = {};
        let hayErrores = false;

        console.log("Validando...");
        console.log(elContacto);

        if (estaVacio(elContacto.nombre)) {
            errores.nombre = 'Es obligatorio especificar un nombre';
            hayErrores = true;
        }

        if (noEsEmail(elContacto.email)) {
            errores.email = 'Es obligatorio especificar un email válido';
            hayErrores = true;
        }

        if (estaVacio(elContacto.texto)) {
            errores.texto = 'Es obligatorio ingresar un mensaje';
            hayErrores = true;
        }

        setErrores(errores);
        return hayErrores;
    };

    const noEsEmail = valor => {
        return (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(valor));
    }
  
    const estaVacio = valor => {
        return (valor == null || valor.trim() === '');
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        setContactoConValidacion({ ...contacto, [name]: value });
    };

    const enviar = () => {
        // Validaciones: Si hay errores no dejo enviar
        if (validarFormulario(contacto)) {
            console.log('Formulario no válido');
            setAlertText('Corrige los errores antes de enviar');
            //alert('Corrige los errores antes de enviar');
            return;
        }

        MensajeDataService.create(contacto)
            .then(response => {
                console.log(response.data);
                setAlertText("Mensaje enviado ok!");
            })
            .catch(e => {
                setAlertText('Error al enviar el mensaje');
                console.log(e);
            });
    };

    return (
        <div className="d-flex">
            <main className="w-100 p-0">
            <Alert alertText={alertText} setAlertText={setAlertText} />
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
                                    type="button"
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