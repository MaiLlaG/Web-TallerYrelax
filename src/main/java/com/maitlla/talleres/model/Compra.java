package com.maitlla.talleres.model;

import java.time.Instant;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity 
// anotación Entity: que cada campo que se añada dentro de public class Compra{}
// va a ser una columna en nuestra base de datos 
@Table(name = "compras")
public class Compra {
    @Id
    @GeneratedValue
    private Long id;
    private Integer importeCompra = 0;
    private Instant fechaCompra;
    private String nombre;
    private String email;
    private String telefono;
    
    @JsonIgnoreProperties("compras")
    @ManyToOne()
    @JoinColumn(name = "id_Taller")
    private Taller taller;
    @ManyToOne()
    @JoinColumn(name = "id_Metodo_De_Pago")
    private MetodoDePago metodoDePago;
    @ManyToOne()
    @JoinColumn(name = "id_cliente")
    private Cliente cliente;
  
    // getter, setters, contructors   -   para generar getter y setters botón derecho y en Source Action...

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

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public Integer getImporteCompra() {
        return importeCompra;
    }
    public void setImporteCompra(Integer importeCompra) {
        this.importeCompra = importeCompra;
    }
    public Instant getFechaCompra() {
        return fechaCompra;
    }
    public void setFechaCompra(Instant fechaCompra) {
        this.fechaCompra = fechaCompra;
    }
    public Taller getTaller() {
        return taller;
    }
    public void setTaller(Taller taller) {
        this.taller = taller;
    }
    public MetodoDePago getMetodoDePago() {
        return metodoDePago;
    }
    public void setMetodoDePago(MetodoDePago metodoDePago) {
        this.metodoDePago = metodoDePago;
    }
    public Cliente getCliente() {
        return cliente;
    }
    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

}
