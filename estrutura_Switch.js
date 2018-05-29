// Estrututa de Controle Switch

const imprimirNota = function (nota) {
    switch (Math.floor(nota)) {

        case 10: case 9:
            console.log('Quadro de Honra')
            break;
        case 8: case 7:
            console.log('Aprovado')
            break;
        case 6: case 5: case 4:
            console.log('Recuperação')
            break;
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break;
        default:
            console.log('Nota Inválida !')
    }
    
}
imprimirNota(9.9)
imprimirNota(8)
imprimirNota(7.9)
imprimirNota(6.9)
imprimirNota(6)
imprimirNota(5)
imprimirNota(4)
imprimirNota(3.9)
imprimirNota(1.9)
imprimirNota(2.9)
imprimirNota(-1)
imprimirNota()