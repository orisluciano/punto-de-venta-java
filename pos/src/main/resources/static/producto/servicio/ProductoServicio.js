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
}

export default ProductoServicio;