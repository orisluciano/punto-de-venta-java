import MenuVista from "./menu/vista/MenuVista.js";
import ElementosPersonlizados from "./utiles/ElementosPersonalizados.js";
import HistorialVentasVista from "./venta/vista/HistorialVentasVista.js";


//let root = document.getElementById("root");
//root.innerHTML = "";
//customElements.define("historial-venta", HistorialVentasVista);
//customElements.define("menu-vista", MenuVista);
//root.innerHTML = "<historial-venta></historial-venta>";
let personalizado = new ElementosPersonlizados();
let costado = document.getElementById("menuCostado");
costado.innerHTML = "";
costado.innerHTML = personalizado.menu.elemento;
pruebawebs();

function pruebawebs(params) {
    // 1. Crear la instancia e iniciar la conexión
const socket = new WebSocket('ws://localhost:8080/ws'); // Usa 'wss://' para conexiones seguras

// 2. Evento: Conexión abierta con éxito
/*socket.addEventListener('open', (event) => {
    console.log('Conectado al servidor WebSocket');
    
    // Enviar datos al servidor (puede ser texto o strings JSON)
    socket.send('¡Hola, servidor!');
    console.log(socket.readyState);
});*/
socket.addEventListener('open', () => {
    // 1. Crear el mensaje de suscripción
    console.log('Conectado al servidor WebSocket');
    const comandoSuscripcion = {
        action: 'subscribe',
        channel: '/app/hello',
        message: {nombre : "algo", contenido: "wqeqwe"}
    };

    // 2. Enviar el objeto convertido a texto JSON
    socket.send(JSON.stringify(comandoSuscripcion));
    console.log(socket.readyState);
});

// 3. Evento: Mensaje recibido desde el servidor
/*socket.addEventListener('message', (event) => {
    console.log('Mensaje del servidor:', event.data);
});*/
socket.addEventListener('message', (event) => {
    const datos = JSON.parse(event.data);
    console.log('Mensaje recibido en el canal:', datos);
});

// 4. Evento: Ocurrió un error en la conexión
socket.addEventListener('error', (error) => {
    console.error('Error en WebSocket:', error);
});

// 5. Evento: La conexión se cerró
socket.addEventListener('close', (event) => {
    console.log(`Conexión cerrada. Código: ${event.code}, Razón: ${event.reason}`);
});
}