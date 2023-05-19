package com.maitlla.talleres.model;

import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


@Entity 
@Table(name = "trabajadores", uniqueConstraints=@UniqueConstraint(columnNames = {"email"}))
public class Trabajador { // (strategy = GenerationType.IDENTITY)
    @Id
    @GeneratedValue
    private Long id;
    private String nombre;
    private String email;
    private String puesto;

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
    public String getPuesto() {
        return puesto;
    }
    public void setPuesto(String puesto) {
        this.puesto = puesto;
    }
    
}
