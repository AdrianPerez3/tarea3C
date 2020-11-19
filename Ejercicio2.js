const rl = require("readline-sync")
console.log(`Holaaa, vamos a hacer algo, te voy a adivinar el numero que estas pensando



                Ahora piensa un numero y responte "Si" si es tu numero, "No" si no es tu numero.`);


let numero_random = Math.floor(Math.random() * 100) + 1

let numero_usuario = rl.questionInt("Puedes introducir el numero que crees que se ha producido aleatoriamente? ")

while(intentos = 1){
    if(numero_random > numero_usuario){
    console.log(`El numero que has introducido ${numero_usuario}, es menor que el numero generado aleatoriamente`);
    numero_usuario = rl.questionInt("Puedes introducir el numero que crees que se ha producido aleatoriamente? ")
    }else if(numero_random < numero_usuario){
    console.log(`El numero que has introducido ${numero_usuario}, es mayor que el numero generado aleatoriamente`);
    numero_usuario = rl.questionInt("Puedes introducir el numero que crees que se ha producido aleatoriamente? ")
    }else{
    console.log(`El numero que has introducido ${numero_usuario}, es igual que el numero generado aleatoriamente`);
    break
    }
    intentos++
    console.log(`El numero de intentos son de ${intentos}`);
}

