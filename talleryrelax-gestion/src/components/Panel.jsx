import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import '../index.css';
import '../views/Panel.css';

const Panel = () => {
    const panelState = {
        id: null,
        email: "",
        password: "",
        //submitted: false
    };

    const [panel, setPanel] = useState(panelState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setPanel({ ...panel, [name]: value });
    };

    const entrarPanel = () => {
        var data = {
            email: panel.email,
            password: panel.password,
        };
    };


    return (

        <div className="min-height-85">

            <div className="form">
                <form>
                    <div className="card-body mt-1">
                        {/* <form id="canalForm" onsubmit="return validar()"> */}
                        <div className="form-group form-group-width shadow rounded-5 p-70 my-5 bg-body rounded">
                            <p className="bg-secondary bg-opacity-10 p-panel card-header text-black text-center fs-5 font-500">GESTION <span className="ms-2"> TallerYrelax</span></p>
                            <p className="text-center text-primary fw-500 font-500">Autenticate para entrar</p>
                            <div className="my-5">
                                {/* <input type="email" /> */}
                                <label className="font-500" htmlFor="email">Correo electrónico</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="nombre@ejemplo.com"
                                     // cambiar
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="my-5">
                                <label className="font-500" htmlFor="password">Contraseña</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    id="password"
                                    placeholder="Contraseña"
                                     // cambiar
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="d-flex flex-wrap justify-content-center col-gap-2">
                                <input
                                    className="btn btn-dark font-500 rounded-0 p-2 mt-4 mb-3 w-bt-47 min-w-bt-27"
                                    type="submit"
                                    id="boton"
                                    value="Enviar formulario"
                                />

                                <input
                                    className="btn btn-outline-light border-dark text-black font-500 rounded-0 p-2 mt-4 mb-3 w-bt-47 min-w-bt-27"
                                    type="reset"
                                    id="boton"
                                    value="Limpiar formulario"
                                />

                                <Link
                                    to={"/gestion"} className="btn btn-primary border-dark font-500 rounded-0 p-2 mt-3 mb-3 w-bt-47 min-w-bt-27">
                                    <span>Ir a Gestion</span>
                                </Link>
                                <Link
                                    to={"/"} className="btn btn-primary border-dark font-500 rounded-0 p-2 mt-3 mb-3 w-bt-47 min-w-bt-27">
                                    <span>Ir a Login</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div >
    );

};

export default Panel;
