package com.maitlla.talleres.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.maitlla.talleres.model.Cliente;

// Un repositorio (nos permite hacer consultas) es una clase que permite hacer queries a una base de datos
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    public Optional<Cliente> findByEmail(String email);
}
