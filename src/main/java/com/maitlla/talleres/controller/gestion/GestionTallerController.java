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

import com.maitlla.talleres.model.Taller;
import com.maitlla.talleres.repository.TallerRepository;

@RestController
@RequestMapping("/gestion/talleres")
public class GestionTallerController {

    @Autowired
    TallerRepository tallerRepository;

    @GetMapping
    public List<Taller> getTalleres() {
        return tallerRepository.findAll();
    }

    @GetMapping("/{id}")
    public Taller getTaller(@PathVariable Long id) {
        return tallerRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    //La clase ResponseEntity representa la respuesta HTTP 
    //Cuando en el cuerpo de la respuesta queremos serializar un objeto usamos su clase para parametrizar ResponseEntity
    public ResponseEntity<Taller> createTaller(@RequestBody Taller taller) throws URISyntaxException {
        Taller savedTaller = tallerRepository.save(taller);
        return ResponseEntity.created(new URI("/publico/talleres/" + savedTaller.getId())).body(savedTaller);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Taller> updateTaller(@PathVariable Long id, @RequestBody Taller taller) {
        Taller currentTaller = tallerRepository.findById(id).orElseThrow(RuntimeException::new);
        currentTaller.setNombre(taller.getNombre());
        currentTaller.setDescripcion(taller.getDescripcion());
        currentTaller.setPrecio(taller.getPrecio());
        currentTaller.setDurasemanas(taller.getDurasemanas());
        currentTaller.setDiasxsemana(taller.getDiasxsemana());
        currentTaller.setNplazas(taller.getNplazas());
        currentTaller.setPlazasCompradas(taller.getPlazasCompradas());
        currentTaller.setFechainicio(taller.getFechainicio());
        currentTaller.setDificultad(taller.getDificultad());
        currentTaller.setImagen(taller.getImagen());
        currentTaller = tallerRepository.save(currentTaller);
        return ResponseEntity.ok(currentTaller);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Taller> deleteTaller(@PathVariable Long id) {
        tallerRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    
}
