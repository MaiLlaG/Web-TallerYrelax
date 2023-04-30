package com.maitlla.talleres.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maitlla.talleres.model.Taller;
import com.maitlla.talleres.repository.TallerRepository;

@RestController
@RequestMapping("/publico/talleres")
public class TallerController {

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
   
}
