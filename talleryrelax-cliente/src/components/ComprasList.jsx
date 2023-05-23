import React, { useState, useEffect } from "react";
import CompraDataService from "../services/CompraDataService";
import { Link } from "react-router-dom";
import '../App.css';
import '../index.css';
import '../views/ComprasList.css';

const ComprasList = () => {
    const [compras, setCompras] = useState([]);
    const [actualCompra, setActualCompra] = useState(null);
    const [actualIndex, setActualIndex] = useState(-1);

    useEffect(() => {
        recuperarCompras();
    }, []);

    const recuperarCompras = () => {
        CompraDataService.getAllAutenticado()
            .then(response => {
                setCompras(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    /*
    const refrescarList = () => {
        recuperarTalleres();
        setActualTaller(null);
        setActualIndex(-1);
    };
    */

    const setActiveCompra = (compra, index) => {
        setActualCompra(compra);
        setActualIndex(index);
    };

    return (
        <div className="list row">

            <div className="col-md-6">
                {actualCompra ? (
                    <div>
                        <h4>Compra</h4>
                        <div>
                            <label>
                                <p>Taller: </p>
                            </label>
                            <p>{actualCompra.taller.nombre}</p>
                        </div>
                        <div>
                            <label>
                                <p>Importe: </p>
                            </label>
                            <p>{actualCompra.importeCompra}</p>
                        </div>
                        <div>
                            <label>
                                <p>Fecha: </p>
                            </label>
                            <p>{actualCompra.fechaCompra == null ? null : actualCompra.fechaCompra.substring(0, 10)}</p>
                        </div>
                        <div>
                            <label>
                                <p>Nombre: </p>
                            </label>
                            <p>{actualCompra.nombre}</p>
                        </div>
                        <div>
                            <label>
                                <p>Email: </p>
                            </label>
                            <p>{actualCompra.email}</p>
                        </div>
                        <div>
                            <label>
                                <p>Telefono: </p>
                            </label>
                            <p>{actualCompra.telefono}</p>
                        </div>
                        <div>
                            <label>
                                <p>Método de pago: </p>
                            </label>
                            <p>{actualCompra.metodoDePago.nombre}</p>
                        </div>

                        <Link
                            onClick={() => setActiveCompra(null, -1)} className="btn btn-4 btn-holder hover-border-7">
                            Volver
                        </Link>
                    </div>
                ) : (
                    <div className="col-md-6">
                        <h4>Mi lista de compras</h4>
                        <ul className="list-group">
                            {compras && compras.map((compra, index) => (
                                <li
                                    className={
                                        "list-group-item " + (index === actualIndex ? "active" : "")
                                    }
                                    onClick={() => setActiveCompra(compra, index)} key={index}>
                                    {compra.taller.nombre} comprado el {compra.fechaCompra == null ? null : compra.fechaCompra.substring(0, 10)}
                                </li>
                            )).reverse()}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ComprasList;