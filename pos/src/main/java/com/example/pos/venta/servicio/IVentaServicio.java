package com.example.pos.venta.servicio;

import java.util.List;

public interface IVentaServicio {
    public void crear(VentaDto dto);
    public void modificar(VentaDto dto);
    public void eliminar(long id);
    public VentaDto getById(long id);
    public List<VentaDto> getTodo();
}
