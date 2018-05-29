// Estrutura de controle IF ELSE IF
/** Controle de valores  */
Number.prototype.between = function (start, end) {
    return this >= start && this <= end
}

const imprimirNota = function (nota) {
    if (nota.between(15, 18)) {
        console.log('Quadro de Honra')
    } else if (nota.between(12, 14.99)) {
        console.log(' Aprovado !')
    } else if (nota.between(7, 11.99)) {
        console.log('Recuperação !')
    } else if (nota.between(0, 6.99)) {
        console.log('Reprovado !')
    } else {
        console.log('Nota Inválida !')
    }
}
imprimirNota(-1)
