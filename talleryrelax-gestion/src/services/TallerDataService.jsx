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
  formData.append("descripcion", data.descripcion);
  formData.append("precio", data.precio);
  formData.append("durasemanas", data.durasemanas);
  formData.append("diasxsemana", data.diasxsemana);
  formData.append("nplazas", data.nplazas);
  formData.append("plazasCompradas", data.plazasCompradas);
  formData.append("fechainicio", data.fechainicio == null ? null : data.fechainicio.toLocaleDateString('es-ES'));
  formData.append("dificultad", data.dificultad);
  //formData.append("imagen", data.imagen);

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

const TallerDataService = {
  getAll,
  get,
  create,
  update,
  remove
};

export default TallerDataService; 