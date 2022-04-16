function contar(){
    let res = document.querySelector('.res')
    res.innerHTML = ''
    for (let c = 10; c >= 1; c--){
        res.innerHTML += `${c} &#128073;`
    }
    res.innerHTML += '&#x1F3C1;'
}