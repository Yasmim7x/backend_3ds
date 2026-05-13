// Grupo de valores indexados a partir 
// do ZERO até o infinito
// interável, homogêneo/heterogêneo
// possui métodos nativos

const time = ["Julius", "Chris"]
// indices       0         1
time[5] // underfined
time[6] = "Victor" // atribuição dinâmicos

for (const jogador of time) {
    if (jogador =! undefined) {
    console.log(jogador)
    }
}

console.log(time)
console.log(time[1])
