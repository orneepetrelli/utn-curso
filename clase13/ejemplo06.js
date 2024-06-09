mes = parseInt(prompt(`Ingrese mes del año`,''));

if(mes ==1 || mes== 2 || mes== 3){
    console.log(`corresponde al p[rimer trimestre del año`)
}else if (mes== 4 || mes ==5 || mes == 6){
    console.log(`corresponde al segundo trimestre del año`)
}else if( mes == 7 || mes == 8 || mes ==9){
    console.log(`corresponde al tercer trimestre del año`)
}else{
    console.log(`corresponde al cuarto trimestre del año`)
}