package com.maitlla.talleres.controller.gestion;

import com.maitlla.talleres.model.Mensaje;
import com.maitlla.talleres.repository.MensajeRepository;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/gestion/mensajes") //en Request se define la ruta
public class GestionMensajeController { // aqui se definen las peticiones http y las rutas
    @Autowired
    MensajeRepository mensajeRepository;

    @GetMapping
    public List<Mensaje> getMensajes() {
        return mensajeRepository.findAll();
    }

    @GetMapping("/{id}")
    public Mensaje getMensaje(@PathVariable Long id) {
        return mensajeRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    //La clase ResponseEntity representa la respuesta HTTP 
    //Cuando en el cuerpo de la respuesta queremos serializar un objeto usamos su clase para parametrizar ResponseEntity
    public ResponseEntity<Mensaje> createMensaje(@RequestBody Mensaje mensaje) throws URISyntaxException {
        Mensaje savedMensaje = mensajeRepository.save(mensaje);
        return ResponseEntity.created(new URI("/gestion/mensajes/" + savedMensaje.getId())).body(savedMensaje);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Mensaje> updateMensaje(@PathVariable Long id, @RequestBody Mensaje mensaje) {
        Mensaje currentMensaje = mensajeRepository.findById(id).orElseThrow(RuntimeException::new);
        currentMensaje.setNombre(mensaje.getNombre());
        currentMensaje.setEmail(mensaje.getEmail());
        currentMensaje.setTexto(mensaje.getTexto());

        currentMensaje = mensajeRepository.save(currentMensaje);
        return ResponseEntity.ok(currentMensaje);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Mensaje> deleteMensaje(@PathVariable Long id) {
        mensajeRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
    
}
