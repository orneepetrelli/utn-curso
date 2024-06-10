const items =document.getElementsByClassName(`item`);

console.log(items)

function cambiarVisibilidad(numItem){ //mando numero de indice

    const item = items[numItem]; 
    if(item.style.visibility == ''){//si se da esta condicion entonces entra , si la visibilidad es igual al vacio.
        item.style.visibility =`hidden`;//cambio a visibilidad oculya.
    }else{
        item.style.visibility ='';
    }
}


function cambiarDisplay(numItem){
    const item = items[numItem]; 

    if(item.style.display == ''){
        item.style.display =`none`;
    }else{
        item.style.display ='';
    }
}




