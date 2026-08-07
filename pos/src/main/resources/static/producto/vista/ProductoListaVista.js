import Raiz from "../../utiles/Raiz.js";

class ProductoListaVista {
    archivo = "./Producto/vista/ProductoListaVista.html";
    //ventaServicio = new VentaServicio();
    idComponentes = {
        tblBodyProducto : "tblBodyProducto"
    }
    root = new Raiz();

    constructor(parameters) {
        //super();
        //this.innerHTML = "Desde Historial venta js"   
        //this.getArchivo();
    }

    cargarVista(){
        this.getArchivo();
    }

    async getArchivo(){
        let archivo = null;
        try {
           let res = await fetch(this.archivo);
           //this.innerHTML = await res.text();
           this.root.cambiarVista(await res.text());
           //this.getVentas();
        } catch (error) {
            alert(error);
            //this.innerHTML = error;
            this.root.cambiarVista(error);
        }
    }

    async getVentas() {
        let ventas = await this.ventaServicio.getventas();
        console.log(await ventas);
        this.cargarTabla(ventas.resultado);
    }

    cargarTabla(datos){
        let esto = this;
        let body = document.getElementById(this.idComponentes.tblBodyVenta);
        body.innerHTML = "";
        datos.forEach(e => {
            let row = document.createElement("tr");
            body.appendChild(row);
            let id = document.createElement("td");
            id.innerHTML = e.id;
            row.appendChild(id);
            let monto = document.createElement("td");
            monto.innerHTML = e.montoFinal;
            row.appendChild(monto);
            let estado = document.createElement("td");
            estado.innerHTML = e.estado;
            row.appendChild(estado);
            let fechaModif = document.createElement("td");
            fechaModif.innerHTML = e.fechaModif;
            row.appendChild(fechaModif);
            row.onclick = function() {
                esto.rowClick(e.id);
            }
        });
    }

    rowClick(ventaId){
        alert(ventaId);
    }
}

export default ProductoListaVista;