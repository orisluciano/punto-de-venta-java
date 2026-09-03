import Raiz from "../../utiles/Raiz.js";
import ProductoServicio from "../servicio/ProductoServicio.js";
import ProductoABMVista from "./ProductoABMVista.js";
import ProductoDetalleVista from "./ProductoDetalleVista.js";

class ProductoListaVista {
    archivo = "./Producto/vista/ProductoListaVista.html";
    prodServicio = new ProductoServicio();
    idComponentes = {
        tblBodyProducto : "tblBodyProducto",
        btnNuevoProd : "btnNuevoProd"
    }
    root = new Raiz();

    constructor(parameters) {
        //super();
        //this.innerHTML = "Desde Historial venta js"   
        //this.getArchivo();
    }

    async cargarVista(){
        await this.getArchivo();
        this.getProductos();
        this.cargarFunciones();
    }

    async getArchivo(){
        let archivo = null;
        try {
           let res = await fetch(this.archivo);
           //this.innerHTML = await res.text();
           this.root.cambiarVista(await res.text());
           //this.getVentas();
        } catch (error) {
            alert(error);
            //this.innerHTML = error;
            this.root.cambiarVista(error);
        }
    }

    async getProductos() {
        let prods = await this.prodServicio.getProductos();;
        console.log(await prods);
        this.cargarTabla(prods.resultado);
    }

    cargarTabla(datos){
        let esto = this;
        let body = document.getElementById(this.idComponentes.tblBodyProducto);
        body.innerHTML = "";
        datos.forEach(e => {
            let row = document.createElement("tr");
            body.appendChild(row);
            let id = document.createElement("td");
            id.innerHTML = e.id;
            row.appendChild(id);
            let nombre = document.createElement("td");
            nombre.innerHTML = e.nombre;
            row.appendChild(nombre);
            let codigo = document.createElement("td");
            codigo.innerHTML = e.tipoCodigo + " - " + e.codigo;
            row.appendChild(codigo);
            /*let fechaModif = document.createElement("td");
            fechaModif.innerHTML = e.fechaModif;
            row.appendChild(fechaModif);*/
            row.onclick = function() {
                esto.rowClick(e);
            }
        });
    }

    rowClick(producto){
        let detalle = new ProductoDetalleVista();
        detalle.cargarVista();
    }

    cargarFunciones(){
        let esto = this;
        let btnNuevo = document.getElementById(this.idComponentes.btnNuevoProd);
        btnNuevo.onclick = function() {
            esto.btnNuevoProdOnClick();
        };
    }

    btnNuevoProdOnClick(){
        let abm = new ProductoABMVista();
        abm.cargarVista();
    }
}

export default ProductoListaVista;