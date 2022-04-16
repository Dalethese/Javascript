function contar(){
    let res = document.querySelector('.res')
    res.innerHTML = ''
    for (let c = 1; c <= 10; c++){
        res.innerHTML += `${c} &#128073;`
    }
    res.innerHTML += '&#x1F3C1;'
}