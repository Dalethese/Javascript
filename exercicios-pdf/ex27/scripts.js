function tabuada(){
    let num = Number(document.querySelector('#number').value)
    let saida = document.querySelector('#saida')
    saida.innerHTML = `<h3>Tabuada de ${num}</h3>`
    
    for(let c = 1;c <= 10; c++){
        saida.innerHTML += `${num} x ${c} = <strong>${num * c}</strong><br>`
    }
}