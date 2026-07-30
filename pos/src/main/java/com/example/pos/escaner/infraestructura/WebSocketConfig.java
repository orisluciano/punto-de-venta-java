package com.example.pos.escaner.infraestructura;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        // Prefijo para los mensajes que el servidor envía a los clientes (suscripciones)
        config.enableSimpleBroker("/topic");
        
        // Prefijo para los mensajes que los clientes envían al servidor
        config.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // Endpoint donde el cliente se conectará inicialmente (ej. ws://localhost:8080/conexion-websocket)
        registry.addEndpoint("/conexion-websocket").setAllowedOrigins("*");
    }
}
