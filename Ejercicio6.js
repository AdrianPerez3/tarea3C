let jugador_1 = []
let jugador_2 = []
let rondas = []

// let gana_1 = "G1"
// let gana_2 = "G2"
// let empate = "E"

for (let x = 1; x <= 10; x++) {
    let jugador1_tirada = Math.floor(Math.random() * 6) + 1;
    let jugador2_tirada = Math.floor(Math.random() * 6) + 1;

    jugador_1.push(jugador1_tirada);
    jugador_2.push(jugador2_tirada);

    if (jugador1_tirada < jugador2_tirada) {
        rondas.push("G2")
    } else if (jugador1_tirada > jugador2_tirada) {
        rondas.push("G1")
    } else {
        rondas.push("E")
    }
}
console.log(jugador_1);
console.log(jugador_2);
console.log(rondas);