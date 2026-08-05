package com.example.pos.producto.servicio;

import com.example.pos.utiles.DtoBase;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class ProductoDto extends DtoBase {
    private String nombre;
    private String descripcion;
    private String codigo;
    private String tipoCodigo;
    private int tipoProductoId;
}
