import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import '../index.css';
import '../views/PagoRealizado.css';

const PagoRealizado = () => {


    return (
        <>
            <h1>Pago realizado correctamente</h1>
            <h4>Puedes ver tu compra en tu lista de Talleres</h4>
            <Link
                to={"/"} className="btn btn-4 btn-holder hover-border-7">
                Mi lista de talleres
            </Link>
            <Link
                to={"/"} className="btn btn-4 btn-holder hover-border-7">
                Home
            </Link>
        </>
    )

};

export default PagoRealizado;