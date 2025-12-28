// Objetos 

const producto = {
    nombreProducto: "Monitor 40'",
    precio: 3500,
    disponible: true,
}

//Ejemplos de consultas
//console.log(producto);
//console.log(producto.precio);
//console.log(producto.nombreProducto);
//console.log(producto.disponible);
//console.log(producto["precio"]);

// Agregar nuevas propiedades
producto.imagen = `imagen.jpg`;

//Eliminar propiedades 
delete producto.disponible;

console.log(producto);

