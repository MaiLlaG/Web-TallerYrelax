package com.maitlla.talleres.controller.gestion;

import com.maitlla.talleres.model.Cliente;
import com.maitlla.talleres.repository.ClienteRepository;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/gestion/clientes") //en Request se define la ruta
public class ClienteController { // aqui se definen las peticiones http y las rutas
    @Autowired
    ClienteRepository clienteRepository;

    @GetMapping
    public List<Cliente> getClientes() {
        return clienteRepository.findAll();
    }

    @GetMapping("/{id}")
    public Cliente getCliente(@PathVariable Long id) {
        return clienteRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    //La clase ResponseEntity representa la respuesta HTTP 
    //Cuando en el cuerpo de la respuesta queremos serializar un objeto usamos su clase para parametrizar ResponseEntity
    public ResponseEntity<Cliente> createCliente(@RequestBody Cliente cliente) throws URISyntaxException {
        Cliente savedCliente = clienteRepository.save(cliente);
        return ResponseEntity.created(new URI("/clientes/" + savedCliente.getId())).body(savedCliente);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cliente> updateCliente(@PathVariable Long id, @RequestBody Cliente cliente) {
        Cliente currentCliente = clienteRepository.findById(id).orElseThrow(RuntimeException::new);
        currentCliente.setNombre(cliente.getNombre());
        currentCliente.setEmail(cliente.getEmail());
       
        currentCliente = clienteRepository.save(currentCliente);
        return ResponseEntity.ok(currentCliente);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Cliente> deleteCliente(@PathVariable Long id) {
        clienteRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
    
}
