package com.maitlla.talleres.controller.gestion;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.Instant;
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

import com.maitlla.talleres.model.Cliente;
import com.maitlla.talleres.model.Compra;
import com.maitlla.talleres.model.MetodoDePago;
import com.maitlla.talleres.model.Taller;
import com.maitlla.talleres.repository.ClienteRepository;
import com.maitlla.talleres.repository.CompraRepository;
import com.maitlla.talleres.repository.MetodoDePagoRepository;
import com.maitlla.talleres.repository.TallerRepository;

@RestController
@RequestMapping("/gestion/compras") //en Request se define la ruta
public class GestionCompraController { // aqui se definen las peticiones http y las rutas
    @Autowired
    CompraRepository compraRepository;
    @Autowired
    TallerRepository tallerRepository;
    @Autowired
    ClienteRepository clienteRepository;
    @Autowired
    MetodoDePagoRepository metodoDePagoRepository;

    @GetMapping
    public List<Compra> getCompras() {
        return compraRepository.findAll();
    }

    @GetMapping("/{id}")
    public Compra getCompra(@PathVariable Long id) {
        return compraRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    //La clase ResponseEntity representa la respuesta HTTP 
    //Cuando en el cuerpo de la respuesta queremos serializar un objeto usamos su clase para parametrizar ResponseEntity
    public ResponseEntity<Compra> createCompra(@RequestBody Compra compra) throws URISyntaxException {
        Long idTaller = compra.getTaller().getId();
        Taller taller = tallerRepository.findById(idTaller).orElseThrow(RuntimeException::new);
        compra.setTaller(taller);
        
        Long idMetodoDePago = compra.getMetodoDePago().getId();
        MetodoDePago metodoDePago = metodoDePagoRepository.findById(idMetodoDePago).orElseThrow(RuntimeException::new);
        compra.setMetodoDePago(metodoDePago);
        
        Long idCliente = compra.getCliente().getId();
        Cliente cliente = clienteRepository.findById(idCliente).orElseThrow(RuntimeException::new);
        compra.setCliente(cliente);

        compra.setFechaCompra(Instant.now());
        compra.setImporteCompra(taller.getPrecio());

        Compra savedCompra = compraRepository.save(compra);
        return ResponseEntity.created(new URI("/compras/" + savedCompra.getId())).body(savedCompra);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Compra> updateCompra(@PathVariable Long id, @RequestBody Compra compra) {
        Compra currentCompra = compraRepository.findById(id).orElseThrow(RuntimeException::new);
        currentCompra.setImporteCompra(compra.getImporteCompra());
        currentCompra.setFechaCompra(compra.getFechaCompra());
        
        if (compra.getTaller() != null){
            Long idTaller = compra.getTaller().getId();
            Taller taller = tallerRepository.findById(idTaller).orElseThrow(RuntimeException::new);
            currentCompra.setTaller(taller);
        }
        
        if (compra.getMetodoDePago() != null){
            Long idMetodoDePago = compra.getMetodoDePago().getId();
            MetodoDePago metodoDePago = metodoDePagoRepository.findById(idMetodoDePago).orElseThrow(RuntimeException::new);
            currentCompra.setMetodoDePago(metodoDePago);
        }
        
        if (compra.getCliente() != null){
            Long idCliente = compra.getCliente().getId();
            Cliente cliente = clienteRepository.findById(idCliente).orElseThrow(RuntimeException::new);
            currentCompra.setCliente(cliente);
        }

        currentCompra = compraRepository.save(currentCompra);
        return ResponseEntity.ok(currentCompra);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Compra> deleteCompra(@PathVariable Long id) {
        compraRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
    
}
