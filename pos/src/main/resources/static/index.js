import HistorialVentasVista from "./venta/vista/HistorialVentasVista.js";

alert("desde js");

let root = document.getElementById("root");
root.innerHTML = "";
customElements.define("historial-venta", HistorialVentasVista);
root.innerHTML = "<historial-venta></historial-venta>";