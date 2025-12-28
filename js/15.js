//Arrays Methods
const meses = new Array(`Enero`, `Febrero`, `Marzo`, `Abril`, `Mayo`); // Areglo plano o unilateral

const carrito = [ //Arreglo con objetos
    { nombre: 'Monitor 30 Pulgadas', precio: 5400 },
    { nombre: 'Monitor 42 pulgadas', precio: 6500 },
    { nombre: 'Tablet', precio: 6400 },
    { nombre: 'Teclado Mecanico', precio: 2400 },
    { nombre: 'Audifonos', precio: 400 },
    { nombre: 'Raton Mecanico', precio: 1400 },
    { nombre: 'Celular', precio: 3400 },
    { nombre: 'Bocinas', precio: 2400 },
    { nombre: 'Laptop', precio: 4400 },
    { nombre: 'Gabinete', precio: 5400 }

];

//forEach
meses.forEach(function (mes) {
    if (mes = 'Marzo') {
        console.log('Marzo si existe');
    }
});

//Includes ideal para arreglos planos
let resultado = meses.includes('Marzo');
console.log(resultado);

//Some ideal para arreglos con objetos 

resultado = carrito.some(function (producto) {
    return producto.nombre === 'Laptop'
});

// Reduce ideal para sumatorias 

resultado = carrito.reduce(function (total, producto) {
    return total + producto.precio
}, 0);

// Filter literal es un filtro 
resultado = carrito.filter(function (producto) {
    return producto.precio > 400
});

console.log(resultado);
