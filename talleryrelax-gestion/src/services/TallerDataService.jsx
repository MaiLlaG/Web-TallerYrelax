import http from "../http-common";

const getAll = () => {
  return http.get("/talleres");
};

const get = id => {
  return http.get(`/talleres/${id}`);
};

const create = data => {
  return http.post("/talleres", data);
};

const update = (id, data) => {
  return http.put(`/talleres/${id}`, data);
};

const remove = id => {
  return http.delete(`/talleres/${id}`);
};

const findByName = nombre => {
  return http.get(`/talleres?nombre=${nombre}`);
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