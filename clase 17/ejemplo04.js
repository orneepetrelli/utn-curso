const frutas =[`palta`,`sandia`,`bananas`,`manzana`];

//console.log(frutas);
console.log(frutas.sort());

const frutasordenadas =frutas.sort();

console.log(frutasordenadas);//a a z

const frutasordenadasreves =frutas.sort().reverse();

console.log(frutasordenadasreves) //z a a 

//ejercicio de clase.
const numeros =[56,34,78,23];

//console.log(`num de menor a mayor `+ numeros.sort());noooo
//console.log(`num de mayor a menor `+ numeros.sort().reverse());noooo

const numerosordenados = numeros.sort(function(a,b){
    return a-b
})

console.log(numerosordenados)// de menor a mayor.

const numerosordenadosreves =numeros.sort(function (a,b){
    return b-a;
})

console.log(numerosordenadosreves);//de mayor a menor