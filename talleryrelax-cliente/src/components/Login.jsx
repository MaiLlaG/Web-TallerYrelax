import React, { useContext } from "react";
import '../App.css';
import '../index.css';
import '../views/Login.css';

import UsuarioContext from "./Usuario";
import { signInWithGoogle, auth } from '../firebase';

const Login = () => {
    const usuario = useContext(UsuarioContext);


    return (
        <div class="login-react">
            <div>
                {
                    usuario.user ?
                        <div>
                            <h1>Hola, <span></span>{usuario.user.displayName}</h1>
                            <img src={usuario.user.photoURL} alt="" />
                            <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
                        </div>
                        :
                        <button className="button botonGoogle" onClick={signInWithGoogle}><img className="iconoLogo" src={require("../img/icono-login.png")} alt="iconoLogin" />
                            {/*<i className="fab fa-google"></i>Sign in with google*/}
                            <div>
                                <span className="textoSign">Sign in with </span>
                                <span className="letraBlue"> G</span>
                                <span className="letraRed">o</span>
                                <span className="letraYellow">o</span>
                                <span className="letraBlue">g</span>
                                <span className="letraGreen">l</span>
                                <span className="letraRed">e</span>
                            </div>
                        </button>
                }
            </div>

        </div>
    );

};

export default Login;