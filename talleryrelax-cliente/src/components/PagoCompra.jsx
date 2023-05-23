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
        if (laCompra.condiciones !== true) {
            errores.condiciones = 'Es obligatorio aceptar las condiciones';
        }
        if (laCompra.metodosDePago === null){
            errores.metodosDePago = 'Debes seleccionar un método de pago'
        }

        // Resto de validaciones

        setErrores(errores);
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCompraConValidacion({ ...compra, [name]: value });
    };
    
    const handleCheckChange = event => {
        const value = event.target.checked;
        console.log("Condiciones:"+value)
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
                // TODO: AQUÍ HAY QUE DECIRLE AL USUARIO QUE HA HABIDO ALGÚN ERROR AL COMPRAR (O QUE NO QUEDAN PLAZAS, LO QUE SEA)
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
        <>
            <h1>Proceder al pago</h1>
            <div className="">
                <div className="contentPaneles">
                    <div>
                    </div>

                    <div className="paneles">
                        <div>
                            <p>Está comprando el taller: {taller.nombre}</p>
                            <p>El importe a pagar es: {taller.precio}€</p>
                        </div>
                        <div className="panelIzq">
                            <div className="contacto">Pago</div>
                        </div>
                        <div className="panelDer">
                            <div className="">
                                <div className="">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input
                                        type="text"
                                        className=""
                                        id="nombre"
                                        required
                                        value={compra.nombre}
                                        onChange={handleInputChange}
                                        name="nombre"
                                    />
                                </div>
                                <div className="">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="text"
                                        className=""
                                        id="email"
                                        required
                                        value={compra.email}
                                        onChange={handleInputChange}
                                        name="email"
                                    />
                                </div>
                                <div className="">
                                    <label htmlFor="telefono">Teléfono</label>
                                    <input
                                        type="text"
                                        className=""
                                        id="telefono"
                                        required
                                        value={compra.telefono}
                                        onChange={handleInputChange}
                                        name="telefono"
                                    />
                                </div>

                                <div className="">
                                    <label>Elegir método de pago: </label>

                                    {metodosDePago && metodosDePago.map((metodoDePago, index) => (

                                        <div className="col-md-2" key={metodoDePago.id}>
                                            <label className="radio">
                                                <input type="radio" name="metodosDePago" id={metodoDePago.id} value={metodoDePago.id}
                                                    onChange={handleInputChange} /> {metodoDePago.nombre}
                                            </label>
                                        </div>

                                    ))}
                                    {errores.metodosDePago && <span>{errores.metodosDePago}</span>}

                                </div>

                                {/* <div class="">
                                    <form>
                                        <h2>TARJETA</h2>
                                        <img className="tarjeta" src={require("../img/tarjetaPequeña.PNG")} alt="tarjeta" />
                                        <p>TITULAR DE LA TARJETA<input type="text" name="NAME" placeholder="Aradhya Goyal" /></p>
                                        <p>CARD NUMBER <input type="number" name="CARD  NUMBER" placeholder="1111-2222-3333-4444" /></p>
                                        <p>EXPIRY MONTH <input type="date" name="EXPIRY MONTH" /></p>

                                        <p>CVV<input type="password" name="CVV" /></p>
                                        <p>AMOUNT<input type="number" name="AMOUNT" /></p>
                                        <input type="submit" value="PAY" />
                                    </form>
                                </div>
                                <div>
                                    <h2>Paypal</h2>
                                    <p>Se te redirigirá a la web de PayPal para realizar el pago y confirmar el pedido.</p>
                                </div>
                                <br /> */}
                                <strong>Aceptar condiciones</strong>
                                <input type="checkbox" name="condiciones" id="condiciones" onChange={handleCheckChange} />
                                <p>He leído y acepto las Condiciones de Compra y la información básica sobre la Política de Privacidad.</p>
                                {errores.condiciones && <span>{errores.condiciones}</span>}



                                <button
                                    type="submit"
                                    className="btn btn-4 btn-holder hover-border-7" onClick={pagar}>
                                    <span>Pagar</span>
                                </button>
                                <br />
                                <Link
                                    to={"/talleres"} className="btn btn-4 btn-holder hover-border-7">
                                    Volver
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )

};

export default PagoCompra;