const nombre = prompt(`Ingresar nombre: `, ``);
const numeroAdivinar = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivinado = false;

console.log(`Número a adivinar (solo para referencia): ${numeroAdivinar}`);

function validarNumero(numero) {
    if (Number.isNaN(numero) || (numero < 1) || (numero > 100)) {
        return false;
    }
    return true;
}

while (!adivinado) {
    const numeroIngresado = parseInt(prompt(`Ingrese un número entre 1 y 100: `, ``));
    if (!validarNumero(numeroIngresado)) {
        alert(`Número no válido. Debe ser un número entre 1 y 100.`);
        continue;
    }
    intentos++;
    
    if (numeroIngresado === numeroAdivinar) {
        alert(`${nombre}, has adivinado el número ${numeroAdivinar} en ${intentos} intentos. ¡Felicidades!`);
        adivinado = true;
    } else if (numeroIngresado < numeroAdivinar) {
        alert(`El número es mayor que ${numeroIngresado}.`);
    } else {
        alert(`El número es menor que ${numeroIngresado}.`);
    }
}
