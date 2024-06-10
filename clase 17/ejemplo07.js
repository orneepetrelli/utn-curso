const datosUsuarios = [
    {
        nombre: "Orne",
        password: "1234",
    },
    {
        nombre: "Laura",
        password: "5678",
    },
    {
        nombre: "Sandra",
        password: "9090",
    },
    {
        nombre: "Clara",
        password: "3435",
    },
    {
        nombre: "Maria",
        password: "6785",
    }
]

console.log(datosUsuarios);

const soloPassword = datosUsuarios.map(function(p){
    return p.password;
})

console.log(soloPassword);

