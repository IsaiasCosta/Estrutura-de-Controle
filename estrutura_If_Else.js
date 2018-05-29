// Estrutura de Controle IF ELSE

const imprimirNota = function(nota){
    if (nota>=10) {
        console.log('Aprovado com a nota ', nota )
        
    }else{
        console.log('Reprovado com a nota ', nota )
    }

}
imprimirNota(10)
imprimirNota(9.9)
imprimirNota(-1)