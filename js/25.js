// for each y map son exclusivos para arreglos 
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

// ForEach recorrer el arreglo para mostrar información
carrito.forEach(producto =>  // con arrow function. 
    console.log(producto.nombre)
);

// map crear un nuevo arreglo a partir del original
const arreglo2 = carrito.map(producto => `${producto.precio}-${producto.nombre}`); // con arrow function.

console.log(arreglo2);