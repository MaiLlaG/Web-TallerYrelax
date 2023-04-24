package com.maitlla.talleres.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.maitlla.talleres.model.Taller;

// Un repositorio (nos permite hacer consultas) es una clase que permite hacer queries a una base de datos
public interface TallerRepository extends JpaRepository<Taller, Long> {
    
}
