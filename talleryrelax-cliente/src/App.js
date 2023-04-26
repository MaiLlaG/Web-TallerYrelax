import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import './index.css';

import TalleresList from "./components/TalleresList";
import Taller from "./components/Taller";
import TallerAdd from "./components/TallerAdd";
import Contacto from "./components/Contacto";

function App() {
  return (
    
    <div>
    
      <nav className="navbar navFondo">
        <a href="/talleres" className="navbar-brand">
          Talleres
        </a>
        <div className="navbar-nav navegador">
          <li className="sizeP">
            <Link to={"/talleres"} className="sizeP">
              Talleres
            </Link>
          </li>
          <li className="sizeP">
            <Link to={"/tallerAdd"} className="sizeP">
              Añadir-Taller
            </Link>
          </li>
          <li className="sizeP">
            <Link to={"/contacto"} className="sizeP">
              Contacto
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<TalleresList />} />
          <Route path="/talleres" element={<TalleresList />} />
          <Route path="/talleres/:id" element={<Taller />} />
          <Route path="/tallerAdd" element={<TallerAdd />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
