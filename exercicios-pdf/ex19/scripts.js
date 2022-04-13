function iniciar(){
    let n1 = Number(prompt('Digite o primeiro valor:'))
    let n2 = Number(prompt('Digite o segundo Valor'))
    let operador = Number(prompt(`Valores: ${n1} e ${n2} \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))
    let texto = document.getElementById('texto')
    let resultado = ''
    switch(operador){
        case 1:
            resultado = n1 + n2
            texto.innerHTML += `<br>${n1} + ${n2} = ${resultado}`
            break
        case 2:
            resultado = n1 - n2
            texto.innerHTML += `<br>${n1} - ${n2} = ${resultado}`
            break
        case 3:
            resultado = n1 * n2
            texto.innerHTML += `<br>${n1} * ${n2} = ${resultado}`
            break
        case 4:
            resultado = n1 / n2
            texto.innerHTML += `<br>${n1} / ${n2} = ${resultado}`
            break
        default:
            alert('Erro')
            break
    }
}