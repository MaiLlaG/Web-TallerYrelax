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


    const [compra, setCompra] = useState(compraState);
    const [submitted, setSubmitted] = useState(false);
    const [taller, setTaller] = useState([]);
    const [metodosDePago, setMetodosDePago] = useState([]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCompra({ ...compra, [name]: value });
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
        setCompra({ ...compra, ["idtaller"]: id });
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

                                        <div class="col-md-2" key={metodoDePago.id}>
                                            <label class="radio">
                                                <input type="radio" name="metodosDePago" id={metodoDePago.id} value={metodoDePago.id}
                                                    onChange={handleInputChange} /> {metodoDePago.nombre}
                                            </label>
                                        </div>

                                    ))}

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
                                <div>
                                    <h2>Bizum</h2>
                                    <p>Se te redirigirá </p>
                                </div>
                                <br /> */}
                                <strong>Aceptar condiciones</strong>
                                <input type="radio" name="condiciones" id="condiciones" value="1" onChange={handleInputChange} />Sí
                                <input type="radio" name="condiciones" id="condiciones" value="0" onChange={handleInputChange} />No
                                <p>He leído y acepto las Condiciones de Compra y la información básica sobre la Política de Privacidad.</p>



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