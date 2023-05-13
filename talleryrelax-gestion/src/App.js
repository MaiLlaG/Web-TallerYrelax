import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import './index.css';


import Panel from "./components/Panel";
import TalleresList from "./components/TalleresList";
import TallerAdd from "./components/TallerAdd";
import Taller from "./components/Taller";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Panel
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Panel
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/talleres"} className="nav-link">
              Talleres
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
