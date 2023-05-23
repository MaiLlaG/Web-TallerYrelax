import http from "../http-common";

const getAll = () => {
  return http.get("/gestion/trabajadores");
};

const get = id => {
  return http.get(`/gestion/trabajadores/${id}`);
};

const create = data => {
  return http.post("/gestion/trabajadores", data);
};

const update = (id, data) => {
  return http.put(`/gestion/trabajadores/${id}`, data);
};

const remove = id => {
  return http.delete(`/gestion/trabajadores/${id}`);
};

const TrabajadorDataService = { 
  getAll,
  get,
  create,
  update,
  remove
};

export default TrabajadorDataService; 