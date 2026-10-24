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
            this.cargarDatos(this.cargarListaDatos());
        } else {
            
        }
    }

    cargarListaDatos(){
        let lista = [
            { id : "prodNombre", dato : this.datos.descripcion },
            { id : "prodDesc", dato : this.datos.descripcion },
            { id : "prodCod", dato : this.datos.codigo },
            { id : "prodTipoCod", dato : this.datos.tipoCodigo },
            { id : "btnProdOp", dato : this.dato.tipoProducto }
        ];
        return lista;
    }
}
export default ProductoABMVista;