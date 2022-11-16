//Algoritmo

const PromptSync = require("prompt-sync");
const prompt = require("prompt-sync")();

let cantidad;
let aux;
do
{
    cantidad = prompt("Ingresa la cantidad de números a ordenar: ");
    cantidad = parseInt(cantidad); //Interfer - NaN
}
while( isNaN(cantidad) )


const arreglo = new Array(cantidad);
for(let i = 0; i < cantidad; i++)
{
    do
    {
    arreglo[i] = prompt("Ingresa el número que estara en la posición " + i + ": ");
    arreglo[i] = parseInt(arreglo[i]); //Interfer - NaN
    }
    while( isNaN(arreglo[i]) )
}

console.log(arreglo);

const arreglo2 = new Array(cantidad);

let min
for (k = 0 ; k < cantidad - 1; k++) 
{
    
    min = Math.min.apply(null, arreglo);
    console.log("m: " + min)
    aux2 = arreglo.indexOf(min)
    
    
    for (i = 0; i < cantidad - 1; i++) 
    {  
        aux = arreglo[i]
        arreglo[i] = arreglo[aux2]
        arreglo[aux2] = aux
        //arreglo2[i] = arreglo[i]
        
        console.log(arreglo.slice(arreglo[i+1],arreglo[cantidad]))
    }
    
}
console.log(" lol " + arreglo.indexOf(min))
console.log(" lol " + arreglo[1])
console.log(arreglo);