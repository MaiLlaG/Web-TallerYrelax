package com.maitlla.talleres.model;

import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


@Entity 
// anotación Entity: que cada campo que se añada dentro de public class Cliente{}
// va a ser una columna en nuestra base de datos 
@Table(name = "clientes", uniqueConstraints=@UniqueConstraint(columnNames = {"email"}))
public class Cliente { // (strategy = GenerationType.IDENTITY)
    @Id
    @GeneratedValue
    private Long id;
    private String nombre;
    private String email;

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
    
}

