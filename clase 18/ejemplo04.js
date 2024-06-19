let a,b,resto;

[a,b]=[10,20];
console.log(a);// que va a mostrar o imprimir?
console.log(b);

[a,b,...resto]=[10,20,30,40,50];

console.log(resto);//que va a imprimir

const vocales= [`a`,`e`,`i`,`o`,`u`];

console.log(vocales);

const vocalesCompletas =[..vocales,`o`,`u`];

console.log(vocalesCompletas);
