package com.maitlla.talleres.controller.gestion;

import com.maitlla.talleres.model.Trabajador;
import com.maitlla.talleres.repository.TrabajadorRepository;

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
@RequestMapping("/gestion/trabajadores")   
public class TrabajadorController {
    @Autowired
    TrabajadorRepository trabajadorRepository;

    @GetMapping
    public List<Trabajador> getTrabajadores() {
        return trabajadorRepository.findAll();
    }

    @GetMapping("/{id}")
    public Trabajador getTrabajador(@PathVariable Long id) {
        return trabajadorRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity<Trabajador> createTrabajador(@RequestBody Trabajador trabajador) throws URISyntaxException {
        Trabajador savedTrabajador = trabajadorRepository.save(trabajador);
        return ResponseEntity.created(new URI("/trabajadores/" + savedTrabajador.getId())).body(savedTrabajador);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Trabajador> updateTrabajador(@PathVariable Long id, @RequestBody Trabajador trabajador) {
        Trabajador currentTrabajador = trabajadorRepository.findById(id).orElseThrow(RuntimeException::new);
        currentTrabajador.setNombre(trabajador.getNombre());
        currentTrabajador.setEmail(trabajador.getEmail());
        currentTrabajador.setPuesto(trabajador.getPuesto());
       
        currentTrabajador = trabajadorRepository.save(currentTrabajador);
        return ResponseEntity.ok(currentTrabajador);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Trabajador> deleteTrabajador(@PathVariable Long id) {
        trabajadorRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
    
}
