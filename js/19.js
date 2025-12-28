//function sumar(n1, n2) {
//    return n1 + n2;
// }

//const resultado = sumar(2, 3);

//console.log(resultado);

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.16 * total;
}

total = agregarCarrito(2000);
total = agregarCarrito(2300);
total = agregarCarrito(2150);

console.log(total);

const totalApagar = calcularImpuesto(total);

console.log(`El total a pagar con impuestos es de: $${totalApagar}`);