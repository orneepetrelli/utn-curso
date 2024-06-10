const alternar= document.getElementsByClassName(`alternar`)[0];//lo de class by name busca un array , una lista de cosas,apuntamos al unico elemento que es 0

//console.log(alternar);
alternar.addEventListener(`click`,function(e){
    e.currentTarget.classList.toggle(`activo`);
})

//por que aca si usamos la e?
//classist: representa una lista de clase asignadas a un elemento en este caso :  alternar y activo. activo esta declarado en el css
//togle:nos permite"prender o "apagar" una clase del objeto cambio
// classlist:add,remove.