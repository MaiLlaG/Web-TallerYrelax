import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import '../App.css';
import '../index.css';
import '../views/PagoCompra.css';
import TallerDataService from "../services/TallerDataService";
import CompraDataService from "../services/CompraDataService";
import MetodoDePagoDataService from "../services/MetodoDePagoDataService";

const PagoCompra = () => {
    const compraState = {
        id: null,
        nombre: "",
        email: "",
        telefono: "",
        metodosDePago: null,
        condiciones: 0,
        idtaller: null
    };

    const [compra, setCompra] = useState(compraState); // Validaciones: No llamo directamente, si no a través de setCompraConValidacion
    const [submitted, setSubmitted] = useState(false);
    const [taller, setTaller] = useState([]);
    const [metodosDePago, setMetodosDePago] = useState([]);
    const [errores, setErrores] = useState({});// Validaciones: Errores

    // Validaciones: Comprobar errores al cambiar el estado
    const setCompraConValidacion = laCompra => {
        setCompra(laCompra);

        const errores = {};

        console.log("Validando...");
        console.log(laCompra);

        if (laCompra.nombre.trim() === '') {
            errores.nombre = 'Es obligatorio especificar un nombre';
        }

        if (laCompra.email.trim() === '') {
            errores.email = 'Es obligatorio especificar un email';
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            errores.email = 'El email ingresado no es válido';
        }

        if (laCompra.telefono.trim() === '') {
            errores.telefono = 'Es obligatorio especificar un teléfono';
        } else if (!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(telefono)) {
            errores.telefono = 'El teléfono ingresado no es válido';
        } 

        if (laCompra.metodosDePago === null) {
            errores.metodosDePago = 'Debes seleccionar un método de pago'
        }

        if (laCompra.condiciones !== true) {
            errores.condiciones = 'Es necesario aceptar los terminos';
        }

        setErrores(errores);
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCompraConValidacion({ ...compra, [name]: value });
    };

    const handleCheckChange = event => {
        const value = event.target.checked;
        console.log("Condiciones:" + value)
        setCompraConValidacion({ ...compra, "condiciones": value });
    };

    const recuperarTaller = (idTaller) => {
        TallerDataService.get(idTaller)
            .then(response => {
                setTaller(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const recuperarMetodosDePago = () => {
        MetodoDePagoDataService.getAll()
            .then(response => {
                setMetodosDePago(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const pagar = () => {
        // Validaciones: Si hay errores no dejo enviar
        if (Object.keys(errores).length > 0) {
            console.log('Formulario no válido');
            alert('Corrige los errores antes de enviar');
            return;
        }

        let pagoFinal = {
            nombre: compra.nombre,
            email: compra.email,
            telefono: compra.telefono,
            taller: {
                id: compra.idtaller
            },
            metodoDePago: {
                id: compra.metodosDePago
            }
        };

        CompraDataService.createAutenticado(pagoFinal)
            .then(response => {
                console.log(response.data);
                irACompraRealizada();
            })
            .catch(e => {
                alert('Error al comprar el taller');
                console.log(e);
            });

    };

    const navigate = useNavigate();

    const irACompraRealizada = () => {
        navigate("/pagoRealizado");
    }

    let { id } = useParams();

    useEffect(() => {
        recuperarTaller(id);
        recuperarMetodosDePago();
        setCompraConValidacion({ ...compra, ["idtaller"]: id });
    }, []);


    return (
        <div className="d-flex">
            <main className="w-100 p-0">
                <div className="container-fluid row min-height-85 p-0 m-0 d-flex justify-content-evenly">
                    <div className="col-md-6 ps-0 bg-arena text-light d-flex justify-content-center">
                        <h4 className="letter-spacing-2 ms-1 fs-4 fw-bold mb-4">Esta comprando el taller..</h4>

                        <div className="d-flex flex-wrap flex-column align-items-center ">
                            <div>
                                <p className="text-y font-Raleway letter-spacing-2">Está comprando el taller: {taller.nombre}</p>
                            </div>
                            <div>

                                <p className="text-secondary font-Raleway letter-spacing-2">El importe a pagar es: {taller.precio}€</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="">
                                    {/*<img className="imgMandala" src={require("../img/flowerMandalaOpacityV.png")} />*/}
                                </div>
                                <img className="rounded-circle mt-2 mb-5 w-75" src={`data:image/jpeg;base64,${taller.imagen}`} alt={taller.nombre} />
                            </div>
                        </div>

                    </div>

                    <div className="col-md-6 bg-dark pe-0 form">
                        <form>
                            <div className="form-group d-flex flex-wrap flex-column align-content-center mt-4 p-3">
                                <h4 className="text-white letter-spacing-2 fs-4 fw-bold mb-4">Proceder al pago</h4>

                                <div className="form-group my-3">
                                    <label className="text-white font-Raleway-bold letter-spacing-2 mb-1" htmlFor="nombre">Nombre <span className="fw-bold"> *</span></label>
                                    <input
                                        className="text-light form-control input-padding font-Raleway"
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        value={compra.nombre}
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
                                        value={compra.email}
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
                                        value={compra.telefono}
                                        onChange={handleInputChange}
                                    />
                                    {errores.telefono && <span className="text-primary text-valida fw-light">{errores.telefono}</span>}
                                </div>

                                <label className="text-white font-Raleway-bold letter-spacing-2 mt-3 mb-1">Elegir método de pago <span className="fw-bold"> *</span></label>
                                <div className="form-group my-3 form-check">

                                    {metodosDePago && metodosDePago.map((metodoDePago, index) => (

                                        <div className="col-md-2" key={metodoDePago.id}>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="metodosDePago"
                                                id={metodoDePago.id}
                                                value={metodoDePago.id}
                                                onChange={handleInputChange}
                                            />
                                            <label className="text-white form-check-label mb-3">{metodoDePago.nombre}</label>
                                        </div>

                                    ))}
                                    {errores.metodosDePago && <span className="text-primary text-valida fw-light">{errores.metodosDePago}</span>}
                                </div>

                                <div className="form-group my-3 form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="condiciones"
                                        id="condiciones"
                                        onChange={handleCheckChange}
                                    />
                                    <label className="text-white form-check-label mb-2">He leído y acepto las Condiciones de Compra y la Política de Privacidad <span className="fw-bold"> *</span></label>
                                    {errores.condiciones && <p><span className="text-primary text-valida fw-light">{errores.condiciones}</span></p>}
                                </div>


                                <button
                                    className="btn btn-primary border-white mt-2 mb-3 rounded-0 min-w-bt-27"
                                    type="submit"
                                    onClick={pagar}>
                                    <span className="font-Raleway-bold letter-spacing-2">Pagar</span>
                                </button>

                                <Link
                                    to={"/talleres"}
                                    className="btn btn-outline-light border-white mt-2 mb-3 rounded-0 min-w-bt-27">
                                    <span className="font-Raleway-bold letter-spacing-2">Volver</span>
                                </Link>


                            </div>
                        </form>
                    </div>

                </div>

            </main >
        </div>
    )

};

export default PagoCompra;