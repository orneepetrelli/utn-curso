const empleados =[
    {
        nombre :"Orne",
        trabajo:"desarrollador",
    },
    {
        nombre :"Laura",
        trabajo:"Abogada",
    },
    {
        nombre :"Daniela",
        trabajo:"maestra",
    },
    {
        nombre :"Cecilia",
        trabajo:"desarrollador",
    },
    {
        nombre :"Jere",
        trabajo:"maestro",
    },
    {
        nombre :"Lionel",
        trabajo:"veterinario",
    },    
]

console.log(empleados);

const desarrollador = empleados.filter( empleado => empleado.trabajo== `desarrollador`)

const nodesarrollador = empleados.filter(empleado => empleado.trabajo !== `desarrollador`);

console.log(desarrollador);
console.log(nodesarrollador);
