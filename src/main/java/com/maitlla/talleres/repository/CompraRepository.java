package com.maitlla.talleres.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.maitlla.talleres.model.Compra;

// Un repositorio (nos permite hacer consultas) es una clase que permite hacer queries a una base de datos
public interface CompraRepository extends JpaRepository<Compra, Long> {
    public List<Compra> findByClienteId(Long clienteId);
    public Optional<Compra> findByIdAndClienteId(Long id, Long clienteId);
} 

