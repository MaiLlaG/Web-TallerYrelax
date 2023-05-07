import http from "../http-common";
import axios from "axios";


const getAllAutenticado = () => {
  return http.get("/publico/compras", 
              { headers: {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
              } 
  });
}  

const createAutenticado = data => {
  return axios.post("/publico/compras", data, 
    { headers: {
      "Authorization" : `Bearer ${localStorage.getItem('token')}`
    } 
  });
};   

const getAll = () => {
  return http.get("/gestion/compras");
};

const get = id => {
  return http.get(`/gestion/compras/${id}`);
};



const CompraDataService = { 
  getAllAutenticado,
  createAutenticado,
  getAll,
  get
};

export default CompraDataService; 