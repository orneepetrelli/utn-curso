const numeros =[10,9,23,34,53,78,5,6];

const encontrado = numeros.find(num => num>12);

console.log(numeros);
console.log(encontrado);

//find> encuentra la primera coincidencia que cumpla con la condicion , no hace todos.
//filter busca a todos los que esten dentro . y el find solo busca el primero que cumpla con la condicion.