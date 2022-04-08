var hora = new Date()
    hora = hora.getHours()
var mins = new Date()
    mins = mins.getMinutes()
console.log(`São ${hora}:${mins} horas`)
if(hora < 12){
    console.log('Bom Dia')
} else if (hora >= 12 && hora < 18){
    console.log('Boa Tarde')
} else{
    console.log('Boa Noite')
}