//Estructuras de control o código condicional
//const puntaje = 1000;
//if (puntaje == 1000) {
//    console.log('Si el puntaje es 1000');
//} else {
//    console.log('No es igual');
//}

//const efectivo = 1000;
//const carrito = 850;
//if (efectivo > carrito) {
//    console.log('Pago realizado');
//} else {
//    console.log('Pago rechazado, fondos insuficientes');
//}

const rol = 'Administrador';
if (rol === 'Administrador') {
    console.log('Acceso total, aceptado');
} else if (rol === 'Editor') {
    console.log('Acceso al área de edición');
} else {
    console.log('Acceso denegado');
}