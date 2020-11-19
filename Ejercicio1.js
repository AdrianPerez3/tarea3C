console.log("Hola bienvenido a la loteria primitiva aleatoria, vamos a sacar los numeros ganadores: ");

let numero
let numero_random
for (numero = 1; numero <= 6; numero++) {
    let numero_random = Math.floor(Math.random() * 49) + 1

    console.log(`El numero ${numero} es: ${numero_random}`);
}
