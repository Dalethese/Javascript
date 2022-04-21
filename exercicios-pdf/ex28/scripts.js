function fatorial(){
    let num = Number(document.querySelector('#number').value)
    let saida = document.querySelector('#saida')
    saida.innerHTML = `<h3>Calculando ${num}!</h3>`
    let fat = Number()
    saida.innerHTML += num
    for(let c = (num - 1); c >= 1; c--){
        saida.innerHTML += `x${c}`
    }
    saida.innerHTML += '='
    for(c = (num-1); c >= 1; c--){
        fat = num * c
        num = fat
    }
    saida.innerHTML += fat
}