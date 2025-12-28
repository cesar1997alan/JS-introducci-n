//Arrow functions 

const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 15);

const aprendiendo = tecnologia => console.log(`Aprendniendo ${tecnologia}`)
aprendiendo('JavaScript');



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
meses.forEach(mes => {
    if (mes = 'Marzo') {
        console.log('Marzo si existe');
    }
});

let resultado;

//Some ideal para arreglos con objetos, con arrow functions 
resultado = carrito.some(producto => producto.nombre === 'Laptop');

// Reduce, con arrow functions
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

// Filter literal es un filtro, con arrow functions  
resultado = carrito.filter(producto => producto.precio > 400
);

resultado = carrito.filter(producto => producto.nombre !== 'Celular');
console.log(resultado);


