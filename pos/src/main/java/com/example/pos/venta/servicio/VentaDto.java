package com.example.pos.venta.servicio;

import java.time.LocalDateTime;

import com.example.pos.utiles.DtoBase;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter @AllArgsConstructor
public class VentaDto extends DtoBase{
    private String estado;
    private Double montoFinal;

    public VentaDto(Long id, String estadoParam, double monto, LocalDateTime fechaModif){
        this.setId(id);
        this.estado = estadoParam;
        this.montoFinal = monto;
        this.setFechaModif(fechaModif);
    }
}
