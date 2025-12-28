const producto = {
    nombreProducto: "Monitor 40'",
    precio: 3500,
    disponible: true,
}

const medidas = {
    peso: `1 kilo`,
    medida: `1m`,
}

const nuevoProducto = { ...producto, ...medidas };

console.log(producto);
console.log(nuevoProducto);