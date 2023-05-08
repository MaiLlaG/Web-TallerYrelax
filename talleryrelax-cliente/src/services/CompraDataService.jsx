import http from "../http-common";

const getAllAutenticado = () => {
  return http.get("/publico/compras", 
              { headers: {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
              } 
  });
}  

const createAutenticado = data => {
  console.log(data);
  return http.post("/publico/compras", data, 
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

const findByName = nombre => {
  return http.get(`/publico/talleres?nombre=${nombre}`);
};

const CompraDataService = { 
  getAllAutenticado,
  createAutenticado,
  getAll,
  get,
  findByName,
};

export default CompraDataService; 