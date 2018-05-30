///Estrutura de Controle WHILE 

// Gerar valores aleatorios entre minino e maximo 
function gerarInteiroMinimoMaximo(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let op =0
while (op!=-1) {
    op=gerarInteiroMinimoMaximo(-1,10)
    console.log(op)
}
console.log('Aperte o f5 para um novo sorteio')