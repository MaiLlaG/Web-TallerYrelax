package com.maitlla.talleres.controller;

import java.net.URI;
import java.net.URISyntaxException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maitlla.talleres.model.Mensaje;
import com.maitlla.talleres.repository.MensajeRepository;

@RestController
@RequestMapping("/publico/mensajes") //en Request se define la ruta
public class MensajeController { // aqui se definen las peticiones http y las rutas
    @Autowired
    MensajeRepository mensajeRepository;

    @PostMapping
    //La clase ResponseEntity representa la respuesta HTTP 
    //Cuando en el cuerpo de la respuesta queremos serializar un objeto usamos su clase para parametrizar ResponseEntity
    public ResponseEntity<Mensaje> createMensaje(@RequestBody Mensaje mensaje) throws URISyntaxException {
        Mensaje savedMensaje = mensajeRepository.save(mensaje);
        return ResponseEntity.created(new URI("/publico/mensajes/" + savedMensaje.getId())).body(savedMensaje);
    }
    
}
