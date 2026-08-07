import MenuVista from "../menu/vista/MenuVista.js";
import ProductoListaVista from "../producto/vista/ProductoListaVista.js";
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
productoLista = {
    nombre : "producto-lista",
    elemento : "<producto-lista></producto-lista>"
};
    constructor(parameters) {
        customElements.define(this.historialVenta.nombre, HistorialVentasVista);
        customElements.define(this.menu.nombre, MenuVista);
        customElements.define(this.productoLista.nombre, ProductoListaVista);
    }
}
export default ElementosPersonlizados