const frutas =['manzanas', 'bananas', 'palta', 'pera'];

console.log(frutas);
document.write(frutas);
console.log(frutas[1]);

/* objetivo es que imprima tenemos manzanas .... tenemos bananas...*/

for(let g=0; g<frutas.length; g++){
    console.log(`Tenemos ` + frutas[g]);
    document.write(`Tenemos `+ frutas[g] + "<br/>")
}
