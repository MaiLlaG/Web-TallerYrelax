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
                    to={"/pagoRealizado"} className="botonPagar btn btn-4 btn-holder hover-border-7">
                    Pagar
                </Link>
                <Link
                    to={"/pagoCompra"} className="btn btn-4 btn-holder hover-border-7">
                    Volver
                </Link>
            </div>
        </>
    )

};

export default PasarelaPago;