// Usando Break e Continue 


//Break - Desvio de fuxo fora do laço corrente que ele suporta 
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i in num) {
    if (i == 6) {
        break

    }
    console.log(`${i} = ${num[i]}`)
}
console.log('\n')
// Continue - Interrompe o laço corrente e vai para proximo
for (let j in num) {
    if (j == 6) {
        continue

    }
    console.log(`${j} = ${num[j]}`)
}


// Exemplo com rotulo 
externo:
for (a in num) {
    for (b in num) {
        if (a == 2 && b == 3) { //Não use essa estrutura 
            break externo
        }
        console.log(`seguencia = ${a},${b}`)
    }
}