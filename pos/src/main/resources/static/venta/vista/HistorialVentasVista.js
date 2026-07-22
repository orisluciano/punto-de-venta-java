import VentaServicio from "../servicio/VentaServicio.js";

class HistorialVentasVista extends HTMLElement{
    archivo = "./venta/vista/HistorialVentasVista.html";
    ventaServicio = new VentaServicio();
    idComponentes = {
        tblBodyVenta : "tblBodyVenta"
    }

    constructor(parameters) {
        super();
        //this.innerHTML = "Desde Historial venta js"   
        this.getArchivo();
    }

    async getArchivo(){
        try {
           let res = await fetch(this.archivo);
           this.innerHTML = await res.text();
           this.getVentas();
        } catch (error) {
            alert(error);
            this.innerHTML = error;
        }
    }

    async getVentas() {
        let ventas = await this.ventaServicio.getventas();
        console.log(await ventas);
        this.cargarTabla(ventas.resultado);
    }

    cargarTabla(datos){
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
        });
    }
}

export default HistorialVentasVista;