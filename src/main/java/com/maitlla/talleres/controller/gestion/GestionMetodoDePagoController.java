package com.maitlla.talleres.controller.gestion;

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

import com.maitlla.talleres.model.MetodoDePago;
import com.maitlla.talleres.repository.MetodoDePagoRepository;

@RestController
@RequestMapping("/gestion/metodosDePago") //en Request se define la ruta
public class GestionMetodoDePagoController { // aqui se definen las peticiones http y las rutas
    @Autowired
    MetodoDePagoRepository metodoDePagoRepository;

    @GetMapping
    public List<MetodoDePago> getMetodoDePago() {
        return metodoDePagoRepository.findAll();
    }

    @GetMapping("/{id}")
    public MetodoDePago getMetodoDePago(@PathVariable Long id) {
        return metodoDePagoRepository.findById(id).orElseThrow(RuntimeException::new);
    }
   
    @PostMapping
    //La clase ResponseEntity representa la respuesta HTTP 
    //Cuando en el cuerpo de la respuesta queremos serializar un objeto usamos su clase para parametrizar ResponseEntity
    public ResponseEntity<MetodoDePago> createMetodoDePago(@RequestBody MetodoDePago metodoDePago) throws URISyntaxException {
        MetodoDePago savedMetodoDePago = metodoDePagoRepository.save(metodoDePago);
        return ResponseEntity.created(new URI("/metodosDePago/" + savedMetodoDePago.getId())).body(savedMetodoDePago);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MetodoDePago> updateMetodoDePago(@PathVariable Long id, @RequestBody MetodoDePago metodoDePago) {
        MetodoDePago currentMetodoDePago = metodoDePagoRepository.findById(id).orElseThrow(RuntimeException::new);
        currentMetodoDePago.setNombre(metodoDePago.getNombre());

        currentMetodoDePago = metodoDePagoRepository.save(currentMetodoDePago);
        return ResponseEntity.ok(currentMetodoDePago);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MetodoDePago> deleteMetodoDePago(@PathVariable Long id) {
        metodoDePagoRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
