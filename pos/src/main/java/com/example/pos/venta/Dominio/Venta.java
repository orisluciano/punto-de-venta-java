package com.example.pos.venta.dominio;

import com.example.pos.utiles.EntidadBase;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "ventas")
@NoArgsConstructor    // Required by Hibernate for entity instantiation
@AllArgsConstructor
@Getter @Setter
public class Venta extends EntidadBase {
    private String estado;
    private double montoFinal;
}
