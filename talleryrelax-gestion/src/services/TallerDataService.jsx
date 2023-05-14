import http from "../http-common";

const getAll = () => {
  return http.get("/gestion/talleres");
};

const get = id => {
  return http.get(`/gestion/talleres/${id}`);
};

const create = data => {
  return http.post("/gestion/talleres", data);
};

const update = (id, data) => {
  return http.put(`/gestion/talleres/${id}`, data);
};

const remove = id => {
  return http.delete(`/gestion/talleres/${id}`);
};

const findByName = nombre => {
  return http.get(`/gestion/talleres?nombre=${nombre}`);
};

const TallerDataService = { 
  getAll,
  get,
  create,
  update,
  remove,
  findByName,
};

export default TallerDataService; 