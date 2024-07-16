const numeros =[100,25,1250,8,16,12,234,4567,12,34,56,789];

let mayor = 0;
console.log(numeros);
console.log(numeros[2]);

for(let i=0; i< numeros.length;i++){
    if(numeros[i] > mayor){
        if(numeros[i] > mayor){
            mayor = numeros[i];
        }
    }
}
console.log(`El numero mayor de los siguientes ${numeros} es ${mayor}`)