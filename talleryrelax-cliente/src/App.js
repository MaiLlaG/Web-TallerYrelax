import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import CompraDataService from "./services/CompraDataService";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './index.css';

import TallerYrelax from "./components/TallerYrelax";
import TalleresList from "./components/TalleresList";
import Taller from "./components/Taller";

import TallerAdd from "./components/TallerAdd";

import Contacto from "./components/Contacto";
import Login from "./components/Login";
import ComprasList from "./components/ComprasList";
import PagoCompra from "./components/PagoCompra";
import PasarelaPago from "./components/PasarelaPago";
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
                <span className="fs-5"> TallerYrelax </span>
              </Link>
            </li>
            <li className="nav-item nav-item my-2 mx-5">
              <Link to={"/talleres"} className="">
                <span className="fs-5"> Talleres </span>
              </Link>
            </li>
            <li className="nav-item nav-item my-2 mx-5">
              <Link to={"/contacto"} className="">
                <span className="fs-5"> Contacto </span>
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
                    <span>Mis compras</span>
                  </div>
                </Link>
              </li>
              :
              <li></li>
            }
          </div>
        </nav>

        <div className="">
          <Routes>
            <Route path="/" element={<TallerYrelax />} />
            <Route path="/talleres" element={<TalleresList />} />
            <Route path="/talleres/:id" element={<Taller />} />

            <Route path="/nuevoTaller" element={<TallerAdd />} />

            <Route path="/contacto" element={<Contacto />} />
            <Route path="/compras" element={<ComprasList />} />
            <Route path="/compras/:id" element={<PagoCompra />} />
            <Route path="/pasarelaPago" element={<PasarelaPago />} />
            <Route path="/pagoRealizado" element={<PagoRealizado />} />
          </Routes>
        </div>

        <footer>
          <div>
            <p className="text-secondary text-center fs-6 mt-2">© Maite Llamas García - TallerYrelax</p>
          </div>
          <div className="footerFondo">
            <div>
              <p className="text-secondary">PAGO SEGURO</p>
            </div>
            <div>
              <p className="text-secondary">Política de protección de datos</p>
            </div>
            <div>
              <p className="text-secondary">Política de cookies</p>
            </div>
            <div>
              <a href="http://localhost:3001/gestion" target="_blank"><p className="m-1 text-dark text-opacity">*</p></a>
            </div>
          </div>
        </footer>

      </div>
    </UsuarioContext.Provider>


  );
}

export default App;
