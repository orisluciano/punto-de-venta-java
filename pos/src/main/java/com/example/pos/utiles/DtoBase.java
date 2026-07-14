package com.example.pos.utiles;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class DtoBase {
    private long id;
    private LocalDateTime fechaCreacion;
    private LocalDateTime fechaModif;
}
