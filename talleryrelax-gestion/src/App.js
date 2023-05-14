import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Panel from "./components/Panel";
import TalleresList from "./components/TalleresList";
import TallerAdd from "./components/TallerAdd";
import Taller from "./components/Taller";
import ClientesList from "./components/ClientesList";
import ClienteAdd from "./components/ClienteAdd";
import Cliente from "./components/Cliente";


function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark justify-content-center">
        <div className="navbar-nav">
          <li className="nav-item">
            <Link to={"/"} className="navbar-brand">
              PANEL
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/talleres"} className="navbar-brand">
              TALLERES
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/clientes"} className="navbar-brand">
              CLIENTES
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Panel />} />
          <Route path="/talleres" element={<TalleresList />} />
          <Route path="/nuevoTaller" element={<TallerAdd />} />
          <Route path="/talleres/:id" element={<Taller />} />
          <Route path="/clientes" element={<ClientesList />} />
          <Route path="/nuevoCliente" element={<ClienteAdd />} />
          <Route path="/clientes/:id" element={<Cliente />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
