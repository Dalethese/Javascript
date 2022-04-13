function carregar(){
    let mensagem = document.getElementById('mensagem')
    let foto = document.getElementById('imagem')
    let data = new Date()
    let horas = data.getHours()
    let mins = data.getMinutes()

    mensagem.innerHTML = `Agora são ${horas}:${mins}h`
    if (horas >= 6 && horas < 12){
        foto.src = 'imagens/manhã.png'
        document.body.style.backgroundColor = '#ffe653'
    } else if (horas >= 12 && horas < 18){
        foto.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = '#feba81'
    } else {
        foto.src = 'imagens/noite.png'
        document.body.style.backgroundColor = '#071c1f'
    }
}