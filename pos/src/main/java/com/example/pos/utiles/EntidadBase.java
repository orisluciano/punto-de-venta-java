package com.example.pos.utiles;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter @MappedSuperclass
public abstract class EntidadBase {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private boolean borrado;

    @Column(nullable = false, updatable = false)
    private LocalDateTime fechaCreacion;

    private LocalDateTime fechaModif;

    @PrePersist
    protected void onCreate() {
        fechaCreacion = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        fechaModif = LocalDateTime.now();
    }
}
