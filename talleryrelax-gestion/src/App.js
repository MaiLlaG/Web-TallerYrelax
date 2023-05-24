import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Gestion from "./components/Gestion";
import TalleresList from "./components/TalleresList";
import Taller from "./components/Taller";
import ClientesList from "./components/ClientesList";
import Cliente from "./components/Cliente";
import TrabajadoresList from "./components/TrabajadoresList";
import Trabajador from "./components/Trabajador";
import MensajesList from "./components/MensajesList";


function App() {
  return (
    <div className="bg-secondary bg-opacity-10">
      <nav className="navbar navbar-expand-xl navbar-dark gap-1 justify-content-center bg-white shadow d-flex mb-5 pt-0">
        <ul className="nav">
          <li className="nav-item mx-5">
            <Link to={"/gestion"}>
              <h3 className="mt-4 mb-4 text-dark font-Raleway letter-spacing-2 fs-3 fw-bold">Gestión TallerYrelax</h3>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="">
        <Routes>
          <Route path="/gestion" element={<Gestion />} />
          <Route path="/mensajes" element={<MensajesList />} />
          <Route path="/talleres" element={<TalleresList />} />
          <Route path="/nuevoTaller" element={<Taller />} />
          <Route path="/talleres/:id" element={<Taller />} />
          <Route path="/clientes" element={<ClientesList />} />
          <Route path="/nuevoCliente" element={<Cliente />} />
          <Route path="/clientes/:id" element={<Cliente />} />
          <Route path="/trabajadores" element={<TrabajadoresList />} />
          <Route path="/nuevoTrabajador" element={<Trabajador />} />
          <Route path="/trabajadores/:id" element={<Trabajador />} />
        </Routes>
      </div>

      <footer className="bg-black text-center font-Raleway letter-spacing-2 p-1">
        <div className="footerFondo">
          <p className="pt-3 text-primary opacity-75 fs-6 footerFuente">Gestión TallerYrelax </p>
          <p className="text-light opacity-25 footerFuente">© Maite Llamas García</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
