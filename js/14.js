//arreglos o Arrays 

const numeros = [10, 20, 30, 40, 50, 60, 70];

console.table(numeros);

// Constructor 
// const meses = new Array(`Enero`, `Febrero`, `Marzo`, `Abril`, `Mayo`);

//console.log(meses); //se recomineda .table para que salgan en tabla y no corrido

//Acceder a los valores de un arreglo

//console.log(numeros[1]);
//console.log(numeros[2]);
//console.log(numeros[3]);
//console.log(numeros[4]);

//Conocer la extensión de un arreglo

//console.log(meses.length);

//numeros.forEach(function (numero) {
//    console.log(numero);
//});

//numeros[8] = 80; // debemos de conocer la extención del arreglo y agregarlo al final 

numeros.push(80, 85, 90); // lo agrega al final del arreglo

numeros.unshift(-10, -20, -30); //agrega la inicio del arreglo

console.table(numeros);

const meses = new Array(`Enero`, `Febrero`, `Marzo`, `Abril`, `Mayo`);

//meses.pop(); //elimina el ultimo elemento del arreglo 
//meses.shift(); //elimina el primer elemento del arreglo

//meses.splice(2, 1); // toma 2 valores, el primero es que elemnto del arreglo va a borrar basado en su indice y el segundo cuantos quieres eliminar apartir de ahí.
//console.table(meses);

// Rest operator o spread operator 

const nuevoArreglo = [...meses, `Junio`, `Julio`, `Agosto`];
console.log(nuevoArreglo);