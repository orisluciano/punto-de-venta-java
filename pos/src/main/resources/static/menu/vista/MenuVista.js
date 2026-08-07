import ProductoListaVista from "../../producto/vista/ProductoListaVista.js";
import ElementosPersonlizados from "../../utiles/ElementosPersonalizados.js";
import Raiz from "../../utiles/Raiz.js";

class MenuVista extends HTMLElement {
    archivo = "./menu/vista/MenuVista.html";
    idComponentes = {
        btnVentas : "btnVentas",
        btnProds : "btnProds"
    };
    root = new Raiz();
    //personalizados = new ElementosPersonlizados();
    constructor(parameters) {
        super();
        this.getArchivo();
    }

    async getArchivo(){
        try {
           let res = await fetch(this.archivo);
           this.innerHTML = await res.text();
           this.cargarFunciones();
        } catch (error) {
            alert(error);
            this.innerHTML = error;
        }
    }

    cargarFunciones(){
        let esto = this;
        let btnVentas = document.getElementById(this.idComponentes.btnVentas);
        btnVentas.onclick = function() {
            esto.btnVentasOnclick();
        };
        let btnProds = document.getElementById(this.idComponentes.btnProds);
        btnProds.onclick = function() {
            esto.btnProdsOnClick();
        };
    }
    
    btnVentasOnclick(){
        let root = document.getElementById("root");
        root.innerHTML = "";
        root.innerHTML = "<historial-venta></historial-venta>";
    }

    btnProdsOnClick(){
        /*let root = document.getElementById("root");
        root.innerHTML = "";
        root.innerHTML = "Proximamente Productos"*/
        //this.root.cambiarVista(this.personalizados.productoLista.elemento);
        let prodVista = new ProductoListaVista();
        prodVista.cargarVista();
    }
}

export default MenuVista;