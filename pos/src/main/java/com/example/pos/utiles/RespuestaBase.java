package com.example.pos.utiles;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class RespuestaBase<T> {
    public List<String> mensajes = new ArrayList<>();
    public List<String> errores = new ArrayList<>();
    private String estado;
    private T resultado;
}
