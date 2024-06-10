const cuadrado=document.getElementsByClassName(`cuadrado`)[0];
const rosa= document.getElementById(`rosa`);
const borde =document.getElementById(`borde`);
const reset= document.getElementById(`reset`);

rosa.addEventListener(`click`, function(){//no va la e xq llamo el elemnto cuadrado y aplico eso
    cuadrado.classList.add(`rosa`);
})
borde.addEventListener(`click`, function(){
    cuadrado.classList.add(`borde`);
})
reset.addEventListener(`click`, function(){
    cuadrado.classList.remove(`rosa`,`borde`);
})
