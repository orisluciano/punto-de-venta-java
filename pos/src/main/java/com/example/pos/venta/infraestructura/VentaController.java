package com.example.pos.venta.infraestructura;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pos.utiles.RespuestaBase;
import com.example.pos.venta.servicio.IVentaServicio;
import com.example.pos.venta.servicio.VentaDto;

@RestController
@RequestMapping("/api/venta")
public class VentaController {
    @Autowired
    private IVentaServicio ventaServicio;

    @GetMapping
    public RespuestaBase<List<VentaDto>> getTodo(){
        RespuestaBase<List<VentaDto>> respuesta = new RespuestaBase<List<VentaDto>>();
        List<VentaDto> lista = this.ventaServicio.getTodo();
        respuesta.setResultado(lista);
        return respuesta;
    }

    @PostMapping
    public RespuestaBase<String> crear(@RequestBody VentaDto ventaDto){
        RespuestaBase<String> respuesta = new RespuestaBase<String>();
        ventaServicio.crear(ventaDto);
        String mensaje = "Venta creada con exito";
        respuesta.setResultado(mensaje);
        return respuesta;
    }

    @PutMapping
    public RespuestaBase<String> modificar(@RequestBody VentaDto ventaDto){
        RespuestaBase<String> respuesta = new RespuestaBase<String>();
        ventaServicio.modificar(ventaDto);
        String mensaje = "Venta modificada con exito";
        respuesta.setResultado(mensaje);
        return respuesta;
    }

    @DeleteMapping
    public RespuestaBase<String> eliminar(@RequestBody VentaDto ventaDto){
        RespuestaBase<String> respuesta = new RespuestaBase<String>();
        ventaServicio.eliminar(ventaDto.getId());
        String mensaje = "Venta eliminada con exito";
        respuesta.setResultado(mensaje);
        return respuesta;
    }
}
