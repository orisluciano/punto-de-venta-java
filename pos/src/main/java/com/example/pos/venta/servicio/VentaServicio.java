package com.example.pos.venta.servicio;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.pos.venta.dominio.IRepoVenta;
import com.example.pos.venta.dominio.Venta;

@Component
public class VentaServicio implements IVentaServicio{
    @Autowired
    private IRepoVenta repoVenta;

    @Override
    public void crear(VentaDto dto) {
        Venta venta = new Venta(dto.getEstado(), dto.getMontoFinal());
        repoVenta.save(venta);
    }

    @Override
    public void modificar(VentaDto dto) {
        Venta venta = new Venta(dto.getEstado(), dto.getMontoFinal());
        venta.setId(dto.getId());
        repoVenta.save(venta);
    }

    @Override
    public void eliminar(long id) {
        Venta venta = new Venta(null, 0);
        venta.setId(id);
        venta.setBorrado(true);
        repoVenta.save(venta);
    }

    @Override
    public VentaDto getById(long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getById'");
    }

    @Override
    public List<VentaDto> getTodo() {
        List<VentaDto> lista = new ArrayList<VentaDto>();
        List<Venta> ventas = this.repoVenta.findAll();
        for (Venta venta : ventas) {
            lista.add(new VentaDto(venta.getId(), venta.getEstado(), venta.getMontoFinal()));
        }
        return lista;
    }
    
}
