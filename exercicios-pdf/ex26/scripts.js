function contar(){
    let res = document.querySelector('.res')
    let inicio = Number(document.querySelector('#inicio').value)
    let fim = Number(document.querySelector('#fim').value)
    res.innerHTML = ''
    
    if(inicio <= fim){
        while(inicio <= fim){
            res.innerHTML += `${inicio} &#128073; `
            inicio++
        }
    res.innerHTML += '&#x1F3C1;'
    }else if(inicio >= fim){
        while(inicio >= fim){
            res.innerHTML += `${inicio} &#128073;`
            inicio--
        }
    res.innerHTML += '&#x1F3C1;'
    }
}