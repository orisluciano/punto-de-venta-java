package com.example.pos.venta.Dominio;

public class Venta {
    private String estado;
    private double montoFinal;
    
    public Venta(String estado, double montoFinal) {
        this.estado = estado;
        this.montoFinal = montoFinal;
    }

    public double getMontoFinal() {
        return montoFinal;
    }
    public void setMontoFinal(double montoFinal) {
        this.montoFinal = montoFinal;
    }
    
    public String getEstado() {
        return estado;
    }
    public void setEstado(String estado) {
        this.estado = estado;
    }
}
