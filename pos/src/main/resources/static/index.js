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