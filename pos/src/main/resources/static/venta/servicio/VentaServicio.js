class VentaServicio {
    api = "http://localhost:8080/api/venta";

    constructor(parameters) {
        
    }

    async getventas(){
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

export default VentaServicio;