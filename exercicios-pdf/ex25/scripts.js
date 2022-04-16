function contar(){
    let res = document.querySelector('.res')
    let inicio = 0
    let final = document.querySelector('#numero')
    res.innerHTML = ''
    if(final.value <= '0'){
        res.innerHTML = 'Digite um número válido!'
    } else {
        res.innerHTML += `Contando até ${final.value}<br>` 
        while(inicio <= final.value){
            res.innerHTML += `${inicio} &#x1F449;` 
            inicio++
        }
    
    res.innerHTML += '&#x1F3C1;'
    }
}