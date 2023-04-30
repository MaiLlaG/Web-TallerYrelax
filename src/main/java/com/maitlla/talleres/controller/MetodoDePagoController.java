package com.maitlla.talleres.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maitlla.talleres.model.MetodoDePago;
import com.maitlla.talleres.repository.MetodoDePagoRepository;

@RestController
@RequestMapping("/publico/metodosDePago") //en Request se define la ruta
public class MetodoDePagoController { // aqui se definen las peticiones http y las rutas
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

    
}
