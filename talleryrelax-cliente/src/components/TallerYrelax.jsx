import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import '../App.css';
import '../index.css';


const TallerYrelax = () => {


    return (
        <>
            <h1>TallerYrelax Home</h1>
            <h4>Carrusel de imágenes</h4>
            <Link
                to={"/talleres"} className="btn btn-4 btn-holder hover-border-7">
                TallerYrelax
            </Link>
        </>
    )

};

export default TallerYrelax;