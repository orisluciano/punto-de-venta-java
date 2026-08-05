package com.example.pos.producto.dominio;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IRepoProducto extends JpaRepository<Producto,Long>{
    
}
