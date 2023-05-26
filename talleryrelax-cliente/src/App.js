import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import CompraDataService from "./services/CompraDataService";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './index.css';

import TallerYrelax from "./components/TallerYrelax";
import TalleresList from "./components/TalleresList";
import Contacto from "./components/Contacto";
import Login from "./components/Login";
import ComprasList from "./components/ComprasList";
import PagoCompra from "./components/PagoCompra";
import PagoRealizado from "./components/PagoRealizado";

import { auth } from './firebase';
import { getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import UsuarioContext from "./components/Usuario";


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
        <nav className="navbar navbar-expand-xl navbar-dark gap-1 list-unstyled d-flex justify-content-center bg-white shadow mb-5 pt-0">
          <div className="collapse navbar-collapse d-flex flex-wrap justify-content-center">
            <li className="nav-item nav-item my-2 mx-5">
              <Link to={"/"} className="">
                <span className="text-shadow fs-5"> TallerYrelax </span>
              </Link>
            </li>
            <li className="nav-item nav-item my-2 mx-5">
              <Link to={"/talleres"} className="">
                <span className="text-shadow fs-5"> Talleres </span>
              </Link>
            </li>
            <li className="nav-item nav-item my-2 mx-5">
              <Link to={"/contacto"} className="">
                <span className="text-shadow fs-5"> Contacto </span>
              </Link>
            </li>
            <li className="nav-item mt-2 mb-1 ms-4 me-2">
              <Login />
            </li>
            {usuario.user ?
              <li className="nav-item mx-3" >
                <Link to={"/compras"}>
                  <img className="iconoCliente ms-4" src={require("./img/icono-cuenta.png")} alt="iconoCuenta" />
                  <div>
                    <span className="text-shadow">Mis compras</span>
                  </div>
                </Link>
              </li>
              :
              <li className="nav-item ms-5" ></li>
            }
          </div>
        </nav>

        <div className="bg-arena">
          <Routes>
            <Route path="/" element={<TallerYrelax />} />
            <Route path="/talleres" element={<TalleresList />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/compras" element={<ComprasList />} />
            <Route path="/compras/:id" element={<PagoCompra />} />
            <Route path="/pagoRealizado" element={<PagoRealizado />} />
          </Routes>
        </div>

        <div className="bg-black pt-1">
          <div className="container">
            <footer className="py-3 my-3">
              <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-light mb-2">PAGO SEGURO</a></li>
              </ul>
              <p className="text-center text-light mt-4 mb-4">Política de protección de datos</p>
              <p className="text-center text-light mt-3 mb-0">Política de cookies</p>
              <a href="http://localhost:3001/" target="_blank"><p className="text-secondary text-center text-opacity-25 fw-bold mt-2 mb-1">*</p></a>
            </footer>
          </div>
          <div className="bg-arena py-2">
            <p className="text-secondary text-center fs-6 mt-2">© Maite Llamas García - TallerYrelax</p>
          </div>
        </div>
      </div>

    </UsuarioContext.Provider>

  );
}

export default App;
