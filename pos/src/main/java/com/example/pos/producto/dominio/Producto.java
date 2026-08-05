package com.example.pos.producto.dominio;

import com.example.pos.utiles.EntidadBase;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "productos")
@NoArgsConstructor    // Required by Hibernate for entity instantiation
@AllArgsConstructor
@Getter @Setter
public class Producto extends EntidadBase {
    private String nombre;
    private String descripcion;
    private String codigo;
    private String tipoCodigo;
    private int tipoProductoId;
}
