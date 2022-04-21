function contar(){
    let inicio = Number(document.querySelector('#inicio').value)
    let fim = Number(document.querySelector('#fim').value)
    let passo = Number(document.querySelector('#passo').value)
    let saida = document.querySelector('#saida')
    saida.innerHTML = ''
    if(inicio <= fim){
        while(inicio <= fim){
            saida.innerHTML += `${inicio} &#128073; `
            inicio += passo
        }
        saida.innerHTML += '&#x1F3C1;'
    }else if(inicio >= fim){
        while(inicio >= fim){
            saida.innerHTML += `${inicio} &#128073;`
            inicio -= passo
        }
        saida.innerHTML += '&#x1F3C1;'
    }
    
}