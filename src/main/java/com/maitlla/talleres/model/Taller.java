package com.maitlla.talleres.model;

//import java.sql.Blob;
import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
// anotación Entity: que cada campo que se añada dentro de public class Taller{}
// va a ser una columna en nuestra base de datos 
@Table(name = "talleres")
public class Taller {
    @Id
    @GeneratedValue
    private Long id;
    private String nombre;
    @Lob
    private String descripcion;
    private Integer precio = 0;
    private Integer durasemanas = 0;
    private Integer diasxsemana = 0;
    private Integer nplazas = 0;
    private Integer plazasCompradas = 0;
    private LocalDateTime fechainicio;
    private String dificultad;
    @Lob
    private byte[] imagen;

    @JsonIgnoreProperties("taller")
    @OneToMany(mappedBy = "taller")
    private List<Compra> compras;

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
    public String getDescripcion() {
        return descripcion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    public Integer getPrecio() {
        return precio;
    }
    public void setPrecio(Integer precio) {
        this.precio = precio;
    }
    public Integer getDurasemanas() {
        return durasemanas;
    }
    public void setDurasemanas(Integer durasemanas) {
        this.durasemanas = durasemanas;
    }
    public Integer getDiasxsemana() {
        return diasxsemana;
    }
    public void setDiasxsemana(Integer diasxsemana) {
        this.diasxsemana = diasxsemana;
    }
    public Integer getNplazas() {
        return nplazas;
    }
    public void setNplazas(Integer nplazas) {
        this.nplazas = nplazas;
    }
    public Integer getPlazasCompradas() {
        return plazasCompradas;
    }
    public void setPlazasCompradas(Integer plazasCompradas) {
        this.plazasCompradas = plazasCompradas;
    }
    public LocalDateTime getFechainicio() {
        return fechainicio;
    }
    public void setFechainicio(LocalDateTime fechainicio) {
        this.fechainicio = fechainicio;
    }
    public String getDificultad() {
        return dificultad;
    }
    public void setDificultad(String dificultad) {
        this.dificultad = dificultad;
    }
    public byte[] getImagen() {
        return imagen;
    }
    public void setImagen(byte[] imagen) {
        this.imagen = imagen;
    }

    public List<Compra> getCompras() {
        return compras;
    }
    public void setCompras(List<Compra> compras) {
        this.compras = compras;
    }

}
