package com.example.pos.producto.servicio;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.pos.producto.dominio.IRepoProducto;
import com.example.pos.producto.dominio.Producto;

@Component
public class ProductoServicio implements IProductoServicio{
    @Autowired
    private IRepoProducto repoProducto;

    @Override
    public List<ProductoDto> getProductos() {
        List<ProductoDto> lista = new ArrayList<ProductoDto>();
        List<Producto> productos = this.repoProducto.findAll();
        for (Producto producto : productos) {
            ProductoDto dto = new ProductoDto();
            dto.setId(producto.getId());
            dto.setNombre(producto.getNombre());
            lista.add(dto);
        }
        return lista;
    }

    @Override
    public void crear(ProductoDto dto){
        Producto entidad = new Producto();
        entidad.setBorrado(false);
        entidad.setNombre(dto.getNombre());
        entidad.setDescripcion(dto.getDescripcion());
        entidad.setTipoProductoId(dto.getTipoProductoId());
        entidad.setCodigo(dto.getCodigo());
        entidad.setTipoCodigo(dto.getTipoCodigo());
        this.repoProducto.save(entidad);
    }
    
}
