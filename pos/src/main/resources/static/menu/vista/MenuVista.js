class MenuVista extends HTMLElement {
    archivo = "./menu/vista/MenuVista.html";
    idComponentes = {
        btnVentas : "btnVentas"
    }
    constructor(parameters) {
        super();
        this.getArchivo();
    }

    async getArchivo(){
        try {
           let res = await fetch(this.archivo);
           this.innerHTML = await res.text();
           this.cargarFunciones();
        } catch (error) {
            alert(error);
            this.innerHTML = error;
        }
    }

    cargarFunciones(){
        let esto = this;
        let btnVentas = document.getElementById(this.idComponentes.btnVentas);
        btnVentas.onclick = function() {
            esto.btnVentasOnclick();
        };
    }
    
    btnVentasOnclick(){
        let root = document.getElementById("root");
        root.innerHTML = "";
        root.innerHTML = "<historial-venta></historial-venta>";
    }
}

export default MenuVista;