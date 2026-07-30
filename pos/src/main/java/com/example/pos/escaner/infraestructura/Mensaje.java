package com.example.pos.escaner.infraestructura;

public class Mensaje {
    private String nombre;
    private String contenido;

    // Constructores, Getters y Setters
    public Mensaje(String nombre, String contenido) {
        this.nombre = nombre;
        this.contenido = contenido;
    }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getContenido() { return contenido; }
    public void setContenido(String contenido) { this.contenido = contenido; }
}