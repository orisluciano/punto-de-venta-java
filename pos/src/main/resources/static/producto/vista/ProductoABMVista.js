import Raiz from "../../utiles/Raiz.js";
import VistaBase from "../../utiles/VistaBase.js";

class ProductoABMVista extends VistaBase {
    root = new Raiz();
    constructor(parameters) {
        super();
        this.archivo = "./Producto/vista/ProductoABM.html";
    }

    async cargarVista(){
        this.root.cambiarVista(await this.getArchivo());
    }
}
export default ProductoABMVista;