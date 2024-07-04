const cantidadNumeros = parseInt(prompt(`Ingrese la cantidad de números que desea sumar: `, ``));

if (!isNaN(cantidadNumeros) && cantidadNumeros > 0) {
    let suma = 0;

    for (let i = 1; i <= cantidadNumeros; i++) {
        const numero = parseFloat(prompt(`Ingrese el número ${i}: `, ``));
        if (!isNaN(numero)) {
            suma += numero;
        } else {
            alert(`Valor ingresado no es un número válido. Inténtelo de nuevo.`);
            break;
        }
    }

    alert(`La suma de los ${cantidadNumeros} números ingresados es: ${suma}`);
} else {
    alert(`La cantidad ingresada no es válida. Debe ser un número entero positivo.`);
}
