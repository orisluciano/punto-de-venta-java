package com.example.pos.venta.servicio;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class GetVentas implements IGetVentas {

    @Override
    public List<VentaDto> getAll() {
        List<VentaDto> lista = new ArrayList<>();
        lista.add(new VentaDto("Iniciada"));
        lista.add(new VentaDto("Cancelada"));
        lista.add(new VentaDto("Terminada"));
        return lista;
    }
    
}
