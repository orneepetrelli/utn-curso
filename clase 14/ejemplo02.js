const valor = parseInt(prompt(`Ingrese un valor comprendido entre 1 y 5, ''`));

switch (valor) {
    case 1:
        document.write('Hola soy el numero 1')
        break;

    case 2:
        document.write('Hola soy el numero 2')
        break;
    case 3:
        document.write('Hola soy el numero 3')
        break;
    case 4:
        document.write('Hola soy el numero 4')
        break;
    case 5:
        document.write('Hola soy el numero 5')
        break;

    default:
        document.write(`debe ingresar un numero comprendido entre 1 y 5`);
        break;
}