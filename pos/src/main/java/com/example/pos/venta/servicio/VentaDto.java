package com.example.pos.venta.servicio;

import com.example.pos.utiles.DtoBase;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class VentaDto extends DtoBase{
    private String estado;
    private Double montoFinal;

    public VentaDto(Long id, String estadoParam, double monto){
        this.setId(id);
        this.estado = estadoParam;
        this.montoFinal = monto;
    }
}
