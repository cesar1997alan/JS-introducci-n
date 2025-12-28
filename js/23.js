// switch
const metodoPago = 'Tarjeta de Credito';

switch (metodoPago) {
    case 'Tarjeta de Devito':
        console.log('Pagaste con tarjeta de devito');
        break;
    case 'Tarjeta de Credito':
        console.log('Pagaste con tarjeta de credito');
        break;
    case 'Efectivo':
        console.log('Pago en efectivo');
        break;
    default:
        console.log('Pago rechazado');
        break;
}