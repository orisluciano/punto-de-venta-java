package com.example.pos.venta.dominio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepoVenta extends JpaRepository<Venta, Long>{
    
}
