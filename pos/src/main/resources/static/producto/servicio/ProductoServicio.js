class ProductoServicio {
    api = "http://localhost:8080/api/producto";

    constructor(parameters) {
        
    }

    async getProductos(){
        let respuesta = null;
        try {
            let resBase = await fetch(this.api);
            respuesta = await resBase.json();
        } catch (error) {
            respuesta = error;
        }
        return respuesta;
    }

    async nuevo(producto) {
        let errores = [];
        if (Object.hasOwn(producto, "nombre")) {
            errores.push("Falta el nombre");
        }
        if (Object.hasOwn(producto, "tipoProducto")) {
            errores.push("Falta el tipo de producto");
        }
        let respuesta = null;
        if (errores.length > 0) {
            respuesta.errores = errores;
        } else {
            try {
                let resBase = await fetch(this.api);
                respuesta = await resBase.json();
            } catch (error) {
                respuesta = error;
            }   
        }
        return respuesta;
    }
}

export default ProductoServicio;