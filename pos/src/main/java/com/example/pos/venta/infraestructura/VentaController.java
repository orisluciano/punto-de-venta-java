package com.example.pos.venta.infraestructura;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pos.venta.servicio.IGetVentas;
import com.example.pos.venta.servicio.VentaDto;

@RestController
@RequestMapping("/api/venta")
public class VentaController {
    private IGetVentas getVentas;

    public VentaController(IGetVentas gVentas){
        this.getVentas = gVentas;
    }

    @GetMapping
    public List<VentaDto> getTodo(){
        return this.getVentas.getAll();
    }
}
