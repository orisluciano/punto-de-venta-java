import MenuVista from "./menu/vista/MenuVista.js";
import HistorialVentasVista from "./venta/vista/HistorialVentasVista.js";

alert("desde js");

//let root = document.getElementById("root");
//root.innerHTML = "";
customElements.define("historial-venta", HistorialVentasVista);
customElements.define("menu-vista", MenuVista);
//root.innerHTML = "<historial-venta></historial-venta>";
let costado = document.getElementById("menuCostado");
costado.innerHTML = "";
costado.innerHTML = "<menu-vista></menu-vista>"