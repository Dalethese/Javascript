let texto = document.querySelector('.texto')

function sortear(){
    let sorteado = Math.floor(Math.random() * 100) + 1
    texto.innerHTML = `O número sorteado foi <mark>${sorteado}</mark>`
}
function limpar(){
    texto.innerHTML = 'Será sorteado um número entre 1 e 100...'
}