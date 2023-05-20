import http from "../http-common";


const create = data => {
  console.log(data);
  return http.post("/publico/mensajes", data);
};   


const MensajeDataService = { 
  create
};

export default MensajeDataService; 