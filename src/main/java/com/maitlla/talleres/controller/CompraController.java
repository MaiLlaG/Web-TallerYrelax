package com.maitlla.talleres.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.Instant;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maitlla.talleres.model.Cliente;
import com.maitlla.talleres.model.Compra;
import com.maitlla.talleres.model.MetodoDePago;
import com.maitlla.talleres.model.Taller;
import com.maitlla.talleres.repository.ClienteRepository;
import com.maitlla.talleres.repository.CompraRepository;
import com.maitlla.talleres.repository.MetodoDePagoRepository;
import com.maitlla.talleres.repository.TallerRepository;

@RestController
@RequestMapping("/publico/compras") //en Request se define la ruta
public class CompraController { // aqui se definen las peticiones http y las rutas
    @Autowired
    CompraRepository compraRepository;
    @Autowired
    TallerRepository tallerRepository;
    @Autowired
    ClienteRepository clienteRepository;
    @Autowired
    MetodoDePagoRepository metodoDePagoRepository;

    private Jwt getUser(){
        Object authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication instanceof JwtAuthenticationToken){
            JwtAuthenticationToken jwtAuthenticationToken =  (JwtAuthenticationToken)authentication;
            return jwtAuthenticationToken.getToken();
        }
        throw new RuntimeException("No está autenticado el usuario o no se ha conseguido recuperar su email");
    }

    private Cliente recuperarOCrearCliente(){
        Jwt user = getUser();
        String email = user.getClaimAsString("email");
        String nombre = user.getClaimAsString("email").split("@")[0];

        Cliente cliente = clienteRepository.findByEmail(email).orElse(null);
        if (cliente == null){
            cliente = new Cliente();
            cliente.setEmail(email);
            cliente.setNombre(nombre);
            cliente = clienteRepository.save(cliente);
        }
        return cliente;
    }

    @GetMapping
    public List<Compra> getCompras() {
        Cliente cliente = recuperarOCrearCliente();

        return compraRepository.findByClienteId(cliente.getId());
    }

    @GetMapping("/{id}")
    public Compra getCompra(@PathVariable Long id) {
        Cliente cliente = recuperarOCrearCliente();

        return compraRepository.findByIdAndClienteId(id, cliente.getId()).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    //La clase ResponseEntity representa la respuesta HTTP 
    //Cuando en el cuerpo de la respuesta queremos serializar un objeto usamos su clase para parametrizar ResponseEntity
    public ResponseEntity<Compra> createCompra(@RequestBody Compra compra) throws URISyntaxException {
        Long idTaller = compra.getTaller().getId();
        Taller taller = tallerRepository.findById(idTaller).orElseThrow(RuntimeException::new);
        compra.setTaller(taller);
        if (taller.getPlazasCompradas() < taller.getNplazas()){
            taller.setPlazasCompradas(taller.getPlazasCompradas()+1);        
        }else{
            throw new RuntimeException("Las plazas del taller están agotadas.");
        }
        
        Long idMetodoDePago = compra.getMetodoDePago().getId();
        MetodoDePago metodoDePago = metodoDePagoRepository.findById(idMetodoDePago).orElseThrow(RuntimeException::new);
        compra.setMetodoDePago(metodoDePago);
        
        Cliente cliente = recuperarOCrearCliente();
        compra.setCliente(cliente);

        compra.setFechaCompra(Instant.now());
        compra.setImporteCompra(taller.getPrecio());

        Compra savedCompra = compraRepository.save(compra);
        tallerRepository.save(taller);
        return ResponseEntity.created(new URI("/gestion/compras/" + savedCompra.getId())).body(savedCompra);
    }
    
}
