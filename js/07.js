// Orden de las operaciones 

let resultado;

resultado = 20 + 30 * 2; // primero se realizan las operaciones de más peso en orden matemático 

resultado = (750 + 750) * 1.16 // usamos parentecis para que se realice primero esa operación 

console.log(resultado);

// Incrementos 

let puntaje = 10

// Incrementos en 1 ++

puntaje++; // primero arroja el valor y despues suma  
++puntaje; // este ya sume y muestra el valor sumado 

// Decrementos en 1 --

puntaje--; // primero arroja el valor y despues resta 
--puntaje; // primero resta y despues arroja el valor 

// Esto es es con diferentes valores 

puntaje += 10; // Incrementos, dependiendo de que valores númericos le asignemos cambia 
puntaje -= 5; // Misma lógica para los decrementos
console.log(puntaje);