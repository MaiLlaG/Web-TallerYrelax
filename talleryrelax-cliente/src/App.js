import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import './index.css';

import TallerYrelax from "./components/TallerYrelax";
import TalleresList from "./components/TalleresList";
import Taller from "./components/Taller";

import TallerAdd from "./components/TallerAdd";

import Contacto from "./components/Contacto";
import Login from "./components/Login";
import ComprasList from "./components/ComprasList";

import PagoRealizado from "./components/PagoRealizado";

import { auth } from './firebase';
import { getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import UsuarioContext from "./components/Usuario.jsx"

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    //const auth = getAuth();
    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        setToken(credential.idToken);
        setUser(result.user);
        // IdP data available using getAdditionalUserInfo(result)
        localStorage.setItem('token', credential.idToken);
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        //const email = error.customData.email;
        // The AuthCredential type that was used.
        //const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("Errores de autenticación:");
        console.log(errorCode);
        console.log(errorMessage);
      });
  }, [])

  const usuario = {
    user: user,
    token: token
  }

  console.log(user);
  console.log(token);

  return (
    <UsuarioContext.Provider value={usuario}>

      <div>

        <nav className="navbar navFondo">
          <a href="/" className="navbar-brand">
            TallerYrelax
          </a>
          <div className="navbar-nav navegador">
            <li className="sizeP">
              <Link to={"/talleres"} className="sizeP">
                Talleres
              </Link>
            </li>
            <li className="sizeP">
              <Link to={"/compras"} className="sizeP">
                Compras
              </Link>
            </li>
        
            <li className="sizeP">
              <Link to={"/contacto"} className="sizeP">
                Contacto
              </Link>
            </li>
            <li className="sizeP">
              <Login />
            </li>

          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<TallerYrelax />} />
            <Route path="/talleres" element={<TalleresList />} />
            <Route path="/talleres/:id" element={<Taller />} />

            <Route path="/tallerAdd" element={<TallerAdd />} />

            <Route path="/contacto" element={<Contacto />} />
            <Route path="/compras" element={<ComprasList />} />
            <Route path="/pagoRealizado" element={<PagoRealizado />} />
          </Routes>
        </div>
      </div>
    </UsuarioContext.Provider>
  );
}

export default App;
