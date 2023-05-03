import React, { useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import '../index.css';
import '../views/Login.css';

import UsuarioContext from "./Usuario";
import { signInWithGoogle, auth } from '../firebase';

const Login = () => {
    const usuario = useContext(UsuarioContext);


    return (
        <div>
            {
                usuario.user ?
                    <div>
                        <h1>Hola, <span></span>{usuario.user.displayName}</h1>
                        <img src={usuario.user.photoURL} alt="" />
                        <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
                    </div>
                    :
                    <button className="button" onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in with google</button>
            }
        </div>
    );

};

export default Login;