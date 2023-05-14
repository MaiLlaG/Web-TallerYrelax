import http from "../http-common";

const getAll = () => {
  return http.get("/gestion/clientes");
};

const get = id => {
  return http.get(`/gestion/clientes/${id}`);
};

const create = data => {
  return http.post("/gestion/clientes", data);
};

const update = (id, data) => {
  return http.put(`/gestion/clientes/${id}`, data);
};

const remove = id => {
  return http.delete(`/gestion/clientes/${id}`);
};

const findByName = nombre => {
  return http.get(`/gestion/clientes?nombre=${nombre}`);
};

const ClienteDataService = { 
  getAll,
  get,
  create,
  update,
  remove,
  findByName,
};

export default ClienteDataService; 