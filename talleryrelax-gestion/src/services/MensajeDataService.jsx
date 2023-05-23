import http from "../http-common";

const getAll = () => {
  return http.get("/gestion/mensajes");
};

const get = id => {
  return http.get(`/gestion/mensajes/${id}`);
};

const create = data => {
  return http.post("/gestion/mensajes", data);
};

const update = (id, data) => {
  return http.put(`/gestion/mensajes/${id}`, data);
};

const remove = id => {
  return http.delete(`/gestion/mensajes/${id}`);
};

const MensajeDataService = { 
  getAll,
  get,
  create,
  update,
  remove
};

export default MensajeDataService; 