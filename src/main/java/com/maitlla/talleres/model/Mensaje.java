package com.maitlla.talleres.model;

import jakarta.persistence.Table;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity 
// anotación Entity: que cada campo que se añada dentro de public class Mensaje{}
// va a ser una columna en nuestra base de datos 
@Table(name = "mensajes")
public class Mensaje {
    @Id
    @GeneratedValue
    private Long id;
    private String nombre;
    private String email;
    private LocalDateTime fecha = LocalDateTime.now();
    private String texto;
  
    // getter, setters, contructors

    public Long getId() {
        return id;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public LocalDateTime getFecha() {
        return fecha;
    }
    public void setFecha(LocalDateTime fecha) {
        this.fecha = fecha;
    }
    public String getTexto() {
        return texto;
    }
    public void setTexto(String texto) {
        this.texto = texto;
    }
    
}
