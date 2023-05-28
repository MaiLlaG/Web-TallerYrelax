import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import '../App.css';
import '../index.css';
import '../Login.css';

import UsuarioContext from "./Usuario";
import { signInWithGoogle, auth } from '../firebase';

const Login = () => {
    const usuario = useContext(UsuarioContext);
    const navigate = useNavigate();

    const logout = () => {
        auth.signOut().then(function () {
            console.log("logout ok");
            localStorage.setItem('token', null);
            navigate("/");
            window.location.reload();
        }).catch(function (error) {
            console.log("error de logout!");
            console.log(error);
        });
    }

    return (
        <div className="login-react">
            <div>
                {
                    usuario.user ?
                        <div className="">
                            <div className="d-flex justify-content-evenly">
                                <p className="text-shadow text-primary mt-1 mb-1">Hola, <span>{usuario.user.displayName}</span></p>
                            </div>
                            <img className="rounded-circle w-25" src={usuario.user.photoURL} alt="" />
                            <button className="button signout border-0 bg-transparent" onClick={logout}><span className="text-shadow text-primary">Sign out</span></button>
                        </div>
                        :
                        <button className="button botonGoogle mt-1" onClick={signInWithGoogle}><img className="iconoLogo" src={require("../img/icono-login.png")} alt="iconoLogin" />
                            <div className="mb-1">
                                <span className="text-shadow text-primary fs-6">Sign in with </span>
                                <span className="letraBlue fs-6"> G</span>
                                <span className="letraRed fs-6">o</span>
                                <span className="letraYellow fs-6">o</span>
                                <span className="letraBlue fs-6">g</span>
                                <span className="letraGreen fs-6">l</span>
                                <span className="letraRed fs-6">e</span>
                            </div>
                        </button>
                }
            </div>

        </div>
    );

};

export default Login;