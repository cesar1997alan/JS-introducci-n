//Declaración de la función 

function sumar() {
    console.log(10 + 10);
}

sumar();

//Expreción de la función 

const sumar2 = function () {
    console.log(3 + 3);
}

sumar2();

// IIFE son muy utiles para proteger que no se mezclen las variables y funciones con las de otros archivos

(function () {
    console.log("Esto es una función");
})();