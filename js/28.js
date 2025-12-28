// Clases 

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene precio de $ ${this.precio}`;
    }

    obtenerPrecio() {
        return `El precio sin iva es $ ${this.precio}`
    }
}

const producto = new Producto('Monitor de 49 pulgadas', 34000, true);
const producto2 = new Producto('Laptop', 34500, false);

console.log(producto.formatearProducto());
console.log(producto2.obtenerPrecio());

// Herencia

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`
    }
}

const libro = new Libro('Manual JS', 350, '102544568');
console.log(libro.formatearProducto());