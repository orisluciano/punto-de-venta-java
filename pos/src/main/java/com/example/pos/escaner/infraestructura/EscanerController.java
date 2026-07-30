package com.example.pos.escaner.infraestructura;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class EscanerController {

    // El cliente envía mensajes a: /app/enviar-mensaje
    @MessageMapping("/enviar-mensaje")
    // El servidor responde automáticamente a todos los suscritos a: /topic/mensajes
    @SendTo("/topic/mensajes")
    public Mensaje procesarMensaje(Mensaje mensajeRecibido) throws Exception {
        // Aquí puedes agregar lógica de negocio (guardar en BD, filtrar palabras, etc.)
        return new Mensaje(mensajeRecibido.getNombre(), "Dice: " + mensajeRecibido.getContenido());
    }
}