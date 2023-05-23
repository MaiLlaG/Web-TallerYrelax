import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import TrabajadorDataService from "../services/TrabajadorDataService";
import '../App.css';
import '../index.css';
import '../views/Trabajador.css';

const Trabajador = () => {
    const { id } = useParams();
    let navigate = useNavigate();

    const trabajadorState = {
        id: null,
        nombre: "",
        email: "",
        puesto: ""
        //submitted: false
    };

    const [actualTrabajador, setActualTrabajador] = useState(trabajadorState);
    const [message, setMessage] = useState("");

    const getTrabajador = id => {
        TrabajadorDataService.get(id)
            .then(response => {
                setActualTrabajador(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        if (id)
            getTrabajador(id);
    }, [id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setActualTrabajador({ ...actualTrabajador, [name]: value });
    };

    const enviarTrabajador = () => {
        console.log(actualTrabajador);
        if (actualTrabajador.id > 0) {
            actualizarTrabajador();
        } else {
            crearTrabajador();
        }
    }

    const crearTrabajador = () => {
        TrabajadorDataService.create(actualTrabajador)
            .then(response => {
                console.log(response.data);
                setMessage("El trabajador fue añadido correctamente");
                getTrabajador(response.data.id);
            })
            .catch(e => {
                console.log(e);
                setMessage("Se ha producido un error: " + e);
            });
    };

    const actualizarTrabajador = () => {
        TrabajadorDataService.update(actualTrabajador.id, actualTrabajador)
            .then(response => {
                console.log(response.data);
                setMessage("La información del trabajador fue actualizada correctamente");
            })
            .catch(e => {
                console.log(e);
            });
    };

    const eliminarTrabajador = () => {
        TrabajadorDataService.remove(actualTrabajador.id)
            .then(response => {
                console.log(response.data);
                navigate("/trabajadores");
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <main className="bg-white p-0">
            <div className="min-height-85">
                {actualTrabajador ? (
                    <div className="edit-form">
                        <h4>Trabajador</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={actualTrabajador.nombre}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={actualTrabajador.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="puesto">Puesto</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="puesto"
                                    name="puesto"
                                    value={actualTrabajador.puesto}
                                    onChange={handleInputChange}
                                />
                            </div>


                            <Link
                                to={"/trabajadores"} className="btn btn-muted font-500 border border-dark rounded-0 p-2 mt-4 mb-3 w-bt-47">
                                <span className="text-decoration-underline">Volver</span>
                            </Link>
                        </form>

                        {actualTrabajador.id > 0 ?
                            <button
                                className="btn btn-primary font-500 rounded-0 p-2 mt-3 mb-3 w-bt-47"
                                type="submit"
                                onClick={eliminarTrabajador}>
                                <span>Eliminar</span>
                            </button>
                            :
                            <span></span>
                        }

                        <button
                            className="btn btn-primary font-500 rounded-0 p-2 mt-3 mb-3 w-bt-47"
                            type="submit"
                            onClick={enviarTrabajador}>
                            {actualTrabajador.id > 0 ?
                                <span>Actualizar</span>
                                :
                                <span>Añadir</span>
                            }
                        </button>

                        <p>{message}</p>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Haz click en un trabajador...</p>
                    </div>
                )}
            </div>
        </main>
    );


};

export default Trabajador;