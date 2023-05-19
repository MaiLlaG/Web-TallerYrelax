package com.maitlla.talleres.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.maitlla.talleres.model.Trabajador;

public interface TrabajadorRepository extends JpaRepository<Trabajador, Long> {
    public Optional<Trabajador> findByEmail(String email);
}
