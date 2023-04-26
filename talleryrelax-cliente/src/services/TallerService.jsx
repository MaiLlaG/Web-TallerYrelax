import http from "../http-common";

const getAll = () => {
  return http.get("/publico/talleres");
};

const get = id => {
  return http.get(`/publico/talleres/${id}`);
};

const create = data => {
  return http.post("/publico/talleres", data);
};

const update = (id, data) => {
  return http.put(`/publico/talleres/${id}`, data);
};

const remove = id => {
  return http.delete(`/publico/talleres/${id}`);
};

const findByName = nombre => {
  return http.get(`/publico/talleres?nombre=${nombre}`);
};

const TallerDataService = { //cambie TallerService por TallerDataService
  getAll,
  get,
  create,
  update,
  remove,
  findByName,
};

export default TallerDataService; //cambie TallerService por TallerDataService