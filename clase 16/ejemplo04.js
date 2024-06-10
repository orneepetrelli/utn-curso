const parrafo=document.getElementById(`parrafo`);
const menos =document.getElementById(`menos`);
const mas= document.getElementById(`mas`);

menos.addEventListener(`click`, function(){
    parrafo.style.fontsize =`10px`;

})

mas.addEventListener(`click`, function(){
    parrafo.style.fontsize =`30px`;

})


//por que no se usa la e?quien actuaria de e? se le aplica a parrafo
// por qur fontsize esta todo junto y no como en el css? en vez de menos/guion se usa mayusculas.