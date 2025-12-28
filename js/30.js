// Promises 
const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;

    if (auth) {
        resolve('Usuario autenticado'); // El promises se cumple.
    } else {
        reject('Usuario no encontrado'); // El promises no se cumple.
    }
});

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

// En los promises existen 3 valores
// Pending: No se ha cumplido, pero tampoco se ha rechazado
// Fulfield: Ya se cumplio
// Rejected: Se ha rechazado o no se ha podido cumplir
