const num1 = parseInt(prompt(`Ingrese el primer numero`,''));//150
const num2 = parseInt(prompt(`Ingrese el segundo numero`,''));//89
const num3 = parseInt(prompt(`Ingrese el tercer numero`,''));//56

console.log(num1, num2, num3);

if(num1>num2 && num1 >num3){
    document.write(`El mayor es ${num1}`);
} else if (num2>num3){
    document.write(`El mayor es ${num2}`);
} else{
    document.write(`el mayor es ${num3}`);
}


