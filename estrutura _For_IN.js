// Estrutura For IN


const notas = [6.5, 2, .6, 4.9, 56.1, 12.4]

for (const i in notas) {
    console.log(i, `${notas[i]}`)
}


// For in acessando um objeto

const pessoa = {
    nome: 'Isaias',
    idade: 41,

}
for (let i in pessoa) {
    console.log(`${i}= ${pessoa[i]}`)
}
