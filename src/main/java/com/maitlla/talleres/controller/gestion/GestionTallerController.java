package com.maitlla.talleres.controller.gestion;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
//import org.springframework.web.bind.annotation.RequestBody;

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

    public class FormWrapper {
        private String nombre;
        private String descripcion;
        private Integer precio = 0;
        private Integer durasemanas = 0;
        private Integer diasxsemana = 0;
        private Integer nplazas = 0;
        private Integer plazasCompradas = 0;
        private LocalDateTime fechainicio;
        private String dificultad;
        private MultipartFile imagen;

        public String getNombre() {
            return nombre;
        }

        public void setNombre(String nombre) {
            this.nombre = nombre;
        }

        public String getDescripcion() {
            return descripcion;
        }

        public void setDescripcion(String descripcion) {
            this.descripcion = descripcion;
        }

        public Integer getPrecio() {
            return precio;
        }

        public void setPrecio(Integer precio) {
            this.precio = precio;
        }

        public Integer getDurasemanas() {
            return durasemanas;
        }

        public void setDurasemanas(Integer durasemanas) {
            this.durasemanas = durasemanas;
        }

        public Integer getDiasxsemana() {
            return diasxsemana;
        }

        public void setDiasxsemana(Integer diasxsemana) {
            this.diasxsemana = diasxsemana;
        }

        public Integer getNplazas() {
            return nplazas;
        }

        public void setNplazas(Integer nplazas) {
            this.nplazas = nplazas;
        }

        public Integer getPlazasCompradas() {
            return plazasCompradas;
        }

        public void setPlazasCompradas(Integer plazasCompradas) {
            this.plazasCompradas = plazasCompradas;
        }

        public LocalDateTime getFechainicio() {
            return fechainicio;
        }

        public void setFechainicio(LocalDateTime fechainicio) {
            this.fechainicio = fechainicio;
        }

        public String getDificultad() {
            return dificultad;
        }

        public void setDificultad(String dificultad) {
            this.dificultad = dificultad;
        }

        public MultipartFile getImagen() {
            return imagen;
        }

        public void setImagen(MultipartFile imagen) {
            this.imagen = imagen;
        }

    }

    @PostMapping
    // La clase ResponseEntity representa la respuesta HTTP
    // Cuando en el cuerpo de la respuesta queremos serializar un objeto usamos su
    // clase para parametrizar ResponseEntity
    public ResponseEntity<Taller> createTaller(@ModelAttribute FormWrapper wrapper)
            throws URISyntaxException, IOException {
        Taller taller = new Taller();
        taller.setNombre(wrapper.getNombre());
        taller.setDescripcion(wrapper.getDescripcion());
        taller.setPrecio(wrapper.getPrecio());
        taller.setDurasemanas(wrapper.getDurasemanas());
        taller.setDiasxsemana(wrapper.getDiasxsemana());
        taller.setNplazas(wrapper.getNplazas());
        taller.setPlazasCompradas(wrapper.getPlazasCompradas());
        taller.setFechainicio(wrapper.getFechainicio());
        taller.setDificultad(wrapper.getDificultad());
        taller.setImagen(wrapper.getImagen().getBytes());
        Taller savedTaller = tallerRepository.save(taller);
        return ResponseEntity.created(new URI("/publico/talleres/" + savedTaller.getId())).body(savedTaller);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Taller> updateTaller(@PathVariable Long id, @ModelAttribute FormWrapper wrapper)
            throws IOException {
        Taller currentTaller = tallerRepository.findById(id).orElseThrow(RuntimeException::new);
        currentTaller.setNombre(wrapper.getNombre());
        currentTaller.setDescripcion(wrapper.getDescripcion());
        currentTaller.setPrecio(wrapper.getPrecio());
        currentTaller.setDurasemanas(wrapper.getDurasemanas());
        currentTaller.setDiasxsemana(wrapper.getDiasxsemana());
        currentTaller.setNplazas(wrapper.getNplazas());
        currentTaller.setPlazasCompradas(wrapper.getPlazasCompradas());
        currentTaller.setFechainicio(wrapper.getFechainicio());
        currentTaller.setDificultad(wrapper.getDificultad());
        if (wrapper.getImagen() != null && wrapper.getImagen().getBytes().length > 0) {
            currentTaller.setImagen(wrapper.getImagen().getBytes());
        }
        currentTaller = tallerRepository.save(currentTaller);
        return ResponseEntity.ok(currentTaller);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Taller> deleteTaller(@PathVariable Long id) {
        tallerRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
