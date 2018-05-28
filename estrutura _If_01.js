// Estrututa de controle  - IF 

function valorDaNota(nota) {

    if (nota >= 7) { // Expressão relacional

        console.log("Boa noticia ! => " + nota)
    }
}
valorDaNota(7)
valorDaNota(6.9)

// Segundo teste IF

function soFaloVerdade(verdade){
    if(verdade){ // a sentença sem operador logico é convertida em um booleano dando um resultado True ou False
 console.log(' Isso é verdade = >  ' + verdade)
    }

}
// São falsos então não é verdade 
soFaloVerdade()
soFaloVerdade(null)
soFaloVerdade(undefined)
soFaloVerdade(NaN)
soFaloVerdade('')
soFaloVerdade(0)
 // São verdade
soFaloVerdade(-1)
soFaloVerdade(' ')
soFaloVerdade('?')
soFaloVerdade([])
soFaloVerdade([3,5])
soFaloVerdade({})




