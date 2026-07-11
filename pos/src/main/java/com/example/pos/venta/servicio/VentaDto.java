package com.example.pos.venta.servicio;

public class VentaDto {
    private String estado;

    public VentaDto(String estadoParam){
        this.estado = estadoParam;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getEstado() {
        return estado;
    }
}
