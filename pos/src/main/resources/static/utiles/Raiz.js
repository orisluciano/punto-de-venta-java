class Raiz {
    id = "root";
    elemento = null;
    constructor(parameters) {

    }

    cambiarVista(contenido){
        this.elemento = document.getElementById(this.id);
        this.elemento.innerHTML = "";
        this.elemento.innerHTML = contenido;
    }
}

export default Raiz;