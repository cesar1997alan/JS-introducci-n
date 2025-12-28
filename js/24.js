// For loop

//for (let i = 0; i < 11; i++) {
//    console.log(i);
//}

//for (let i = 0; i <= 101; i++) {  // saber si el número del 0 al 1000 es par o impar
//    if (i % 2 === 0) {
//       console.log(`El número ${i} es PAR`);
//  } else {
//    console.log(`El número ${i} es IMPAR`);
// }
// }

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

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}

// While loop

// let i = 0; // indice

// while (i <= 101) { // condición
//  if (i % 2 === 0) {
//    console.log(`Èl número ${i} es PAR`);
// } else {
//   console.log(`Èl número ${i} es IMPAR`);
// }
// i++; //incremento
// }

// while (i < carrito.length) {
// console.log(carrito[i].nombre)0
// }
// i++;

// Do while loop

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 11);