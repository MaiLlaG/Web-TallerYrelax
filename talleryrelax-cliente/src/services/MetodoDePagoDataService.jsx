import http from "../http-common";

const getAll = () => {
  return http.get("/publico/metodosDePago");
};

const MetodoDePagoDataService = {
  getAll
};

export default MetodoDePagoDataService; 