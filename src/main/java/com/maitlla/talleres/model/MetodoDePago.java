package com.maitlla.talleres.model;

import jakarta.persistence.Table;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity 
// anotación Entity: que cada campo que se añada dentro de public class MetodoDePago{}
// va a ser una columna en nuestra base de datos 
@Table(name = "metodosDePago")
public class MetodoDePago {
    @Id
    @GeneratedValue
    private Long id;
    private String nombre;
  
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
  
}
