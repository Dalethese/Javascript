function tabuada(){
    let num = Number(document.querySelector('#numero').value)
    let saida = document.querySelector('#saida')
    let tab = document.querySelector('#tab')
    
    if (num == 0){
        saida.innerHTML = '<p>[Erro] insira um valor válido</p>'
    }else{
        tab.innerHTML = ''
        for(let c = 1;c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}