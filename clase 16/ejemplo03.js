const formulario = document.getElementById(`formulario`);

formulario.addEventListener(`submit`, function(e){
    e.preventDefault();

    if(e.currentTarget.nombre.value ==''){//si el valor del nombre es igual al vacio entonces muestra la alerta.
        alert(`El campo nombre es requerido`);
        return;
    }
    if(e.currentTarget.mensaje.value==''){ //el mensaje es vacio?
        alert(`El campo mensaje es requerido`);
        return;
    }

    alert(`Gracias ${e.currentTarget.nombre.value} por enviarnos el siguiente mensaje ${e.currentTarget.mensaje,value}`)
})