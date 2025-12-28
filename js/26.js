// This 

const reservacion = {
    nombre: 'Cesar',
    apellido: 'Ruiz',
    Total: 5000,
    pagado: false,
    informacion: function () {
        console.log(`El cliente ${this.nombre} reservó y la cantidad a pagar es de ${this.Total}`);
    }
}

reservacion.informacion();