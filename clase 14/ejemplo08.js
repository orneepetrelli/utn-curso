function validarForm(){
    const nombreValido =true;
    const passWordValido = validarLargo(document.form.text1.value,5);

    console.log(nombreValido, passWordValido);
    const resultado = nombreValido && passWordValido;
    if(resultado){
        alert ('ES VALIDO')
    }else{
        alert('NO ES VALIDO');
    }
}



function validarLargo(texto, LargoRequerido){
    return texto.length >=LargoRequerido;
}