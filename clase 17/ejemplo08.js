const alumnos = [
    {
        nombre:"orne",
        edad:10
    },
    {
        nombre:"milagros",
        edad:7
    },
    {
        nombre:"Willy",
        edad:8
    },
    {
        nombre:"Leo",
        edad:2
    },
    {
        nombre:"Maia",
        edad:5
    },
    {
        nombre:"Pedro",
        edad:6
    },

]

console.log(alumnos);

const chicos = alumnos.filter(alumno  => alumno.edad >= 4 );

console.log(chicos);

for(let i=0; i< chicos.length ;i++){
    document.write(`<li> Niño: ${chicos[i].nombre},cuya edad es${chicos[i].edad}</li>`)
}

