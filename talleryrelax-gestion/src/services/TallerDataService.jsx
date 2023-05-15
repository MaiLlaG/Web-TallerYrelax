import http from "../http-common";

const getAll = () => {
  return http.get("/gestion/talleres");
};

const get = id => {
  return http.get(`/gestion/talleres/${id}`);
};

const createOld = data => {
  return http.post("/gestion/talleres", data);
};
const create = (data, onUploadProgress) => {
  let formData = new FormData();

  formData.append("imagen", data.imagen);
  formData.append("nombre", data.nombre);
  // TODO: PONER EL RESTO DE VALORES

  return http.post("/gestion/talleres", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
}

const update = (id, data, onUploadProgress) => {
  let formData = new FormData();

  formData.append("imagen", data.imagen);
  formData.append("nombre", data.nombre);
  // TODO: PONER EL RESTO DE VALORES

  return http.put(`/gestion/talleres/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
}

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