//let now = new Date();
//alert( now ); // muestra en pantalla la fecha y la hora actuales

const dia = new Date();
const hours = dia.getHours();

console.log(hours);

const nombre = prompt(`Escribir tu nombre: `, ``);

const today = new Date();

const hrs = today.getHours();

if (hrs < 12) {
    document.write(`Buenos dias ` + nombre) + `!!`;
    console.log(`Buenos dias ${nombre} !!`);
} else if (hrs >= 12 && hrs <= 19) {
    document.write(`Buenos tardes ` + nombre) + `!!`;
    console.log(`Buenos tardes ${nombre} !!`);
} else {
    document.write(`Buenas noches ` + nombre) + `!!`;
    console.log(`Buenas noches ${nombre} !!`);
}
