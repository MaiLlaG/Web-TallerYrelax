import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import '../index.css';

const PagoRealizado = () => {


    return (
        <>
            <div className="container-fluid text-center winter-neva-gradient2 d-flex align-content-start justify-content-evenly align-item-center row min-height-85 bg-arena m-0 pt-3 gap-5">
                <h2 className="mt-5 letter-spacing-2">Pago realizado correctamente</h2>
                <h4 className="letter-spacing-2">Puedes ver tu compra en <span className="text-primary">Mis compras </span>(Mi lista de talleres)</h4>
                <p>Para entrar en <span className="text-primary">Mis compras </span> tienes que estar loguead@</p>
                <div className="justify-content-center mb-4">
                    <Link
                        to={"/compras"}
                        className="btn btn-outline-light border-primary text-black mt-3 mb-3 rounded-0 min-w-bt-27">
                        <span className="font-Raleway-bold letter-spacing-2">Mis compras</span>
                    </Link>
                </div>

                <div className="justify-content-center mb-4">
                    <Link
                        to={"/"}
                        className="btn btn-outline-light border-primary text-black mt-2 mb-3 rounded-0 min-w-bt-27">
                        <span className="font-Raleway-bold letter-spacing-2">Página de inicio</span>
                    </Link>
                </div>
            </div>

        </>
    )

};

export default PagoRealizado;