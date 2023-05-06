import React, { useState, useEffect } from "react";
import CompraDataService from "../services/CompraDataService";
import { Link } from "react-router-dom";
import '../App.css';
import '../index.css';

const ComprasList = () => {
    const [compras, setCompras] = useState([]);
    const [actualCompra, setActualCompra] = useState(null);
    const [actualIndex, setActualIndex] = useState(-1);
    const [buscarxNombre, setBuscarxNombre] = useState("");

    useEffect(() => {
        recuperarCompras();
    }, []);

    const onChangeBuscarxNombre = e => {
        const buscarxNombre = e.target.value;
        setBuscarxNombre(buscarxNombre);
    };

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

    const findByName = () => {
        CompraDataService.findByName(buscarxNombre)
            .then(response => {
                setCompras(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div className="list row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar por nombre"
                        value={buscarxNombre}
                        onChange={onChangeBuscarxNombre}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn"
                            type="button" onClick={findByName}>
                            Search
                        </button>
                    </div>
                </div>
            </div>


            <div className="col-md-6">
                {actualCompra ? (
                    <div>
                        <h4>Compra</h4>
                        <div>
                            <label>
                                <strong>Nombre:</strong>
                            </label>
                            {actualCompra.taller.nombre}
                        </div>
                        <div>
                            <label>
                                <strong>Importe:</strong>
                            </label>
                            {actualCompra.importeCompra}
                        </div>
                        <div>
                            <label>
                                <strong>Fecha:</strong>
                            </label>
                            {actualCompra.fechaCompra}
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
                                    {compra.taller.nombre} comprado el {compra.fechaCompra}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ComprasList;