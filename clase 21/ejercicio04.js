const texto= document.getElementById(`texto`);
const contar = document.getElementById(`contar`);

texto.addEventListener(`Keyup`, function(){
    contar.innerText = texto.ariaValueMax.length;
});



