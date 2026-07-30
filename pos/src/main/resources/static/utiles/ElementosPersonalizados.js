import MenuVista from "../menu/vista/MenuVista.js";
import HistorialVentasVista from "../venta/vista/HistorialVentasVista.js";

class ElementosPersonlizados {
menu = {
    nombre : "menu-vista",
    elemento : "<menu-vista></menu-vista>"
};
historialVenta = {
    nombre : "historial-venta",
    elemento : "<historial-venta></historial-venta"
};
    constructor(parameters) {
        customElements.define(this.historialVenta.nombre, HistorialVentasVista);
        customElements.define(this.menu.nombre, MenuVista);
    }
}
export default ElementosPersonlizados