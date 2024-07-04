const nombre = prompt(`Ingresar nombre: `, ``);
const edad = parseInt(prompt(`Ingrese la edad: `, ``));
console.log(nombre, edad);

function validarEdad(edad) {
    if (Number.isNaN(edad) || (edad < 1)) {
        return false;
    }
    return true;
}

let resultado = validarEdad(edad);

if (resultado) {
    if (edad >= 18) {
        alert(`${nombre} puede conducir y tiene ${edad}`);
    } else {
        alert(`${nombre} no puede conducir, pues tiene ${edad}`)
    }
} else {
    alert(`Edad no valida`);
}