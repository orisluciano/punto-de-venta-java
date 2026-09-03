import Raiz from "../../utiles/Raiz.js";
import VistaBase from "../../utiles/VistaBase.js";

class ProductoDetalleVista extends VistaBase{
    root = new Raiz();
    lista = [
        {id : "btnProdABM", funcion : () => this.btnProdABMOnclick()},
        { id : "btnProdPrecio", funcion : () => this.btnProdPrecioOnclick()},
        { id : "btnProdStock", funcion : () => this.btnProdStockOnclick()}
    ];
    constructor(parameters) {
        super();
        this.archivo = "./Producto/vista/ProductoDetalle.html";
    }

    async cargarVista(){
        this.root.cambiarVista(await this.getArchivo());
        this.cargarFunciones(this.lista);
    }

    btnProdABMOnclick(){
        this.btnActive(this.lista[0].id);
        alert("abm");
    }

    btnProdPrecioOnclick(){
        this.btnActive(this.lista[1].id);
        alert("Precio");
    }

    btnProdStockOnclick(){
        this.btnActive(this.lista[2].id);
        alert("Stock");
    }

    btnActive(id){
        let botones = [];
        //const buttons = document.querySelectorAll('.switcher-btn');
        //buttons.forEach(btn => btn.classList.remove('active'));
        //element.classList.add('active');
        this.lista.forEach(e => botones.push(document.getElementById(e.id)));
        botones.forEach(e => e.classList.remove("active"));
        let btnAct = document.getElementById(id);
        btnAct.classList.add("active");
    }
}

export default ProductoDetalleVista;