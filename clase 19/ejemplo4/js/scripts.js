$(document).ready(function(){//cuando esta preparando el documento
    $window +$(window);//como llama jquery al elemento

    $(`#intro`).height($window.height())//intro es la 1 imagen >alto
    $window.scroll(function(){//tengo en cuenra el movim del scroll de lops otrs 3 div con la clase backgorund >each es por cada elemento.
        $(`div.background`).each(function(index,item){
            const $scroll = $(item);
            const yPos = -($window.scrollTop()/$scroll.data(`speed`));// - eje coordendas es para arriba y segund la velocidad declarada se va moviendo.
            const coords = `50%` + yPos +`px`;// x> 50% y posic y sale dinamicamente segun valor/ velocidad(data-speed)
            $scroll.css({backgroundPosition : coords});// se lo aplico por css
        })//fin prime funcion
    })//fin seg funcion
})//fin de la funcion
//tiene de objetivo saber como se ba desplazando que el dato clave es el numero , por eso es diferente y se genera con el primer elementro wue tiene un id de intro y todos tiene class backgorund y lo que hace es: llama la funcion como tipo const let , etc , asi llama los elementos y llama el documento y el elemento intro, y llamo a cada div que tiene cada uno. scrool es la posicion que tiene ese id. las coordenadas no las sabemos xq se van mvoiendo (--,++) si no tenemos ese menos entonces las imagenes van para arriba.   despues essa posocion dinamica la paso, la pos en y es fija.(si no tiene el java scip el rio no se mueve el texto, ni el rio ni nada)