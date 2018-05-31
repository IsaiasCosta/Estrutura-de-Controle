// Estrutura for 

// Usando While 
let cont = 0
while (cont <= 10) {
    console.log('Contador ', cont)
    cont++
}

//Usando For
for (let cont = 0; cont <= 10; cont++) {
    console.log("Contador --> ", cont)

}


// Pecorrer Array com For 

const notas = [6.8, 1.2, 5.9, 4.5, 12.5,9.1]
for (let i = 0; i < notas.length; i++) {
    console.log( `Notas  ${notas[i]}` )
    
}
