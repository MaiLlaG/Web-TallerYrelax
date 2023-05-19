import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TallerDataService from "../services/TallerDataService";
import ClienteDataService from "../services/ClienteDataService";
import '../App.css';
import '../index.css';
import '../views/BuscarxNombre.css';


const BuscarxNombre = () => {
    const [talleres, setTalleres] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [buscarxNombre, setBuscarxNombre] = useState("");

    const onChangeBuscarxNombre = e => {
        const buscarxNombre = e.target.value;
        setBuscarxNombre(buscarxNombre);
    };

    const findByName = () => {
        TallerDataService.findByName(buscarxNombre)
            .then(response => {
                setTalleres(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });

        ClienteDataService.findByName(buscarxNombre)
            .then(response => {
                setClientes(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });

    };



    return (
        <>

            <div className="input-group d-flex inputBuscador">
                <input
                    className="form-control rounded"
                    type="search"
                    placeholder="Buscar por nombre"
                    value={buscarxNombre}
                    onChange={onChangeBuscarxNombre}
                    aria-label="Search"
                    aria-describedby="search-addon"
                />
                <button
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={findByName}>
                    <span>Search</span>
                </button>
            </div>

        </>
    );

};
export default BuscarxNombre;