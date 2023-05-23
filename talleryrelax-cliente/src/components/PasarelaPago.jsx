import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import '../App.css';
import '../index.css';
import '../views/PasarelaPago.css';

const PasarelaPago = () => {


    return (
        <>
            <div className="">
                <h4>Pasarela de Pago</h4>
                <div className="fondoTPV">
                </div>

                <Link
                    to={"/pagoRealizado"}
                    className="btn btn-primary border-dark mt-2 mb-3 rounded-0 min-w-bt-27">
                    <span className="font-Raleway letter-spacing-2">Pagar</span>
                </Link>

                <Link
                    to={"/pagoCompra"}
                    className="btn btn-outline-light border-dark text-black mt-3 mb-3 rounded-0 min-w-bt-27">
                    <span className="font-Raleway-bold letter-spacing-2">Volver</span>
                </Link>
            </div>
        </>
    )

};

export default PasarelaPago;