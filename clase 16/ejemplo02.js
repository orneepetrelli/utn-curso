const link =document.getElementById(`link`);

link.addEventListener(`click`,function(e){
    e.preventDefault();//freno algo que naturalmente lo hacia solo.
    alert(`Quisiste ir a: ` + e.currentTarget.href)
})//click y abre la pantalla, busca la pagina que sea, lo que hace el prevent frena el coso y current busca la informaion del atributo.