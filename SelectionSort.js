//Algoritmo SelectionSort.js

const PromptSync = require("prompt-sync");
const prompt = require("prompt-sync")();

let cantidad;
let aux;
let aux2 = []
const arreglo = new Array(cantidad);
let arreglo2 = []
let min

do
{
    cantidad = prompt("Ingresa la cantidad de números a ordenar: ");
    cantidad = parseInt(cantidad); //Interfer - NaN
}
while( isNaN(cantidad) )

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

for (k = 0 ; k < 1; k++) 
{ 
    for (i = 0; i < cantidad - k; i++) 
    {  
        min = Math.min.apply(null, arreglo);
        console.log("min: " + min)
        aux2 = arreglo.indexOf(min)
        aux = arreglo[0]
        arreglo[0] = arreglo[aux2]
        arreglo[aux2] = aux
        console.log(arreglo)
        arreglo2[i] = arreglo[0]
        arreglo.shift()
        console.log(arreglo)
    }
}
console.log(arreglo2);
