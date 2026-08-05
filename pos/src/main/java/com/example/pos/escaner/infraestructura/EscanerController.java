package com.example.pos.escaner.infraestructura;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class EscanerController {

    @MessageMapping("/hello") // Recibe en /app/hello
    @SendTo("/topic/greetings") // Reenvía a /topic/greetings
    public String greeting(Mensaje message) throws Exception {
        System.out.println("Mensaje recibido");
        String algo = "Hola, " + HtmlUtils.htmlEscape(message.getNombre()) + "!";
        return algo;
    }
}