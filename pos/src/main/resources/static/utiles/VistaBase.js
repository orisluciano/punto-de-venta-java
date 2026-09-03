class VistaBase {
    archivo = null;
    constructor(parameters) {
        
    }

    async getArchivo(){
        let respuesta = null;
        if (this.archivo === null) {
            respuesta = "No se pudo cargar la vista";
        } else {
            try {
                let res = await fetch(this.archivo);
                //this.root.cambiarVista(await res.text());
                respuesta = await res.text();
            } catch (error) {
                alert(error);
                //this.root.cambiarVista(error);
                respuesta = error;
            }
        }
        return respuesta;
    }

    cargarVista(){
        throw new Error("No se implemento la funcion cargarVista");
    }

    cargarFunciones(lista){
        lista.forEach(e => {
            let elemento = document.getElementById(e.id);
            elemento.addEventListener("click", e.funcion);
        });
    }
}
export default VistaBase;