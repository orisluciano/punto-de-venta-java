import Raiz from "../../utiles/Raiz.js";
import VistaBase from "../../utiles/VistaBase.js";

class ProductoABMVista extends VistaBase {
    root = new Raiz();
    datos = null;
    operacion = null;

    constructor(datos, operacion) {
        super();
        this.archivo = "./Producto/vista/ProductoABM.html";
        this.datos = datos;
        this.operacion = operacion;
    }

    async cargarVista(){
        this.root.cambiarVista(await this.getArchivo());
    }
    
    verificarOperacion(){
        if (this.operacion !== "crear") {
            this.cargarDatos();
        } else {
            
        }
    }

    cargarDatos(){
        
    }
}
export default ProductoABMVista;