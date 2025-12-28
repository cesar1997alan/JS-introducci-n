//"use strict" // Corre JS en modo estricto

//Objetos 
const producto = {
    nombreProducto: "Monitor 40'",
    precio: 3500,
    disponible: true,
}

Object.freeze(producto); // preeviene agregar nuevas propiedades a los objetos
// .seal solo permite modificar los existentes 
//producto.imagen = "imagen.jpg";

console.log(Object.isFrozen(producto));

console.log(producto);  