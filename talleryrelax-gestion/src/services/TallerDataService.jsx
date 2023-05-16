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
const crearFormData = (data) => {
  console.log(data);
  let formData = new FormData();

  if (data.imagen != null && typeof data.imagen.name == 'string') {
    formData.append("imagen", data.imagen);
  }
  formData.append("nombre", data.nombre);
  formData.append("fechainicio", data.fechainicio.toISOString().slice(0, -5));
  // TODO: PONER EL RESTO DE VALORES

  return formData;
}
const create = (data, onUploadProgress) => {
  let formData = crearFormData(data);

  return http.post("/gestion/talleres", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
}

const update = (id, data, onUploadProgress) => {
  let formData = crearFormData(data);

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