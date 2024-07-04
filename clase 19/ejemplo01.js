const nombre = prompt(`Ingrese su nombre`, ``);
const edad = parseInt(prompt(`Ingrese su edad`, ``));

if(Number.isNaN(edad)){
    console.log(`Debes ingresar un numero.`)

}else if(edad > 18){
    console.log(`${nombre} que tienes ${edad} puedes conducir`)
}else{
    console.log(`${nombre} al tener ${edad} años , No puedes conducir`)
}