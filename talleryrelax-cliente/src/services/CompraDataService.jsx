import http from "../http-common";
import UsuarioContext from "../components/Usuario";
import axios from "axios";
import { useContext } from "react";


const getAllAutenticado = () => {
  //const usuario = useContext(UsuarioContext);
  const token = localStorage.getItem('token');
  return http.get("/publico/compras", 
              { headers: {
                "Content-type": "application/json",
                "Authorization" : `Bearer ${token}`
              } 
  });
}  

const getAll = () => {
  return http.get("/gestion/compras");
};

const get = id => {
  return http.get(`/gestion/compras/${id}`);
};

/*
const create = data => {
  // return http.post("/publico/compras", data);
  
  const api = "http://localhost:8080"; 
  const usuario = useContext(UsuarioContext);
  return axios.post(api + "/publico/compras", data,
              { headers: {"Authorization" : `Bearer ${usuario.token}`} 
  });
};    */

const CompraDataService = { 
  getAllAutenticado,
  getAll,
  get,
  //create
};

export default CompraDataService; 