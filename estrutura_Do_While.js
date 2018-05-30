//Estrutura Do While

function gerarInteiroMinimoMaximo(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let op = -1
do {
    op = gerarInteiroMinimoMaximo(-1, 10)
    console.log(op)
} while (op != -1)
console.log('Aperte o f5 para um novo sorteio')