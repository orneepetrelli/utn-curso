/*
var: puede ser redefinida
let: contador de visitas usamos let, xq se inicializa que va ahaciendo que ese valor se vyaa actualizando. Puedo reasignar.
const: no se puede reasignar , ya la cree y no puedo ni deberia modificar.
 */


const nombre= 'Orne';/*es mejor simples , xq si intercalamos html con este ,html no lo interpreta*/
const apellido="petrelli"
const edad = 19;

console.log(nombre);/*muestra mensaje en consola web , oara saber que informacion esta guardando "nombre"*/
console.log(apellido);
console.log(edad);
console.log('nombre');/*imprime la palabra nombre*/
console.log(`Mi nombre es ${nombre} y tengo ${edad}`);

document.write(nombre); /*no usamos tanto , muestra arriba*/
document.write(` mi nombre es ${nombre} y tengo ${edad}`);

