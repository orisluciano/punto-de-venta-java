package com.example.pos.producto.infraestructura;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pos.producto.servicio.IProductoServicio;
import com.example.pos.producto.servicio.ProductoDto;
import com.example.pos.utiles.RespuestaBase;

@RestController
@RequestMapping("/api/producto")
public class ProductoContoller {
    @Autowired
    private IProductoServicio productoServicio;

    @GetMapping
    public RespuestaBase<List<ProductoDto>> getTodo(){
        RespuestaBase<List<ProductoDto>> respuesta = new RespuestaBase<List<ProductoDto>>();
        List<ProductoDto> lista = this.productoServicio.getProductos();
        respuesta.setResultado(lista);
        return respuesta;
    }
}
