import Raiz from "../../utiles/Raiz.js";
import VistaBase from "../../utiles/VistaBase.js";

class ProductoABMVista extends VistaBase {
    root = new Raiz();
    constructor(parameters) {
        super();
        this.archivo = "./Producto/vista/ProductoABMVista.html";
    }

    cargarVista(){
        this.root.cambiarVista(this.getArchivo());
    }
}
export default ProductoABMVista;