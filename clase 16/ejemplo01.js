const boton2 =document.getElementById(`boton`);//variable y seleccionar por id.
boton2.addEventListener(`click`,function(e){
alert(e.currentTarget.innerText);//la e busca el padre del hijo., a la alerta le 
})