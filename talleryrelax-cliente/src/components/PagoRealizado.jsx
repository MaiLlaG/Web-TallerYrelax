import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import '../index.css';
import '../views/PagoRealizado.css';

const PagoRealizado = () => {


    return (
        <>
            <h1>Pago realizado correctamente</h1>
            <h4>Puedes ver tu compra en tu lista de Talleres comprados</h4>
            <Link
                to={"/compras"}
                className="btn btn-outline-light border-dark text-black mt-3 mb-3 rounded-0 min-w-bt-27">
                <span className="font-Raleway-bold letter-spacing-2">Mi lista de talleres</span>
            </Link>

            <Link
                to={"/"}
                className="btn btn-outline-light border-dark text-black mt-3 mb-3 rounded-0 min-w-bt-27">
                <span className="font-Raleway-bold letter-spacing-2">Página de inicio</span>
            </Link>

        </>
    )

};

export default PagoRealizado;