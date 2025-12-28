// POO

// Object Literal 
const producto = {
    nombre: 'Tablet',
    precio: 4500
}

// Object Constructor 
function PRODUCTO(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}
const producto2 = new PRODUCTO('Monitor de 49 pulgadas', 34000, true);
const producto3 = new PRODUCTO('Laptop', 34500, false);

function formatearProducto(producto) {
    return `El producto ${producto.nombre} tiene precio de $ ${producto.precio}`;
}

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);

console.log(formatearProducto(producto2));

// Prototypes nos va a permitir crear funciones que solo se utilizan en un objeto en especifico 

PRODUCTO.prototype.formatearProducto = function () {
    return `El producto ${this.nombre} tiene precio de $ ${this.precio}`;
}

// Instancias 
const producto4 = new PRODUCTO('Teclado', 3500, true);
const producto5 = new PRODUCTO('Mouse', 750, true);

// Uso
console.log(producto4.formatearProducto());
console.log(producto5.formatearProducto());