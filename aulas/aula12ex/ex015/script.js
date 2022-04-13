function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    let nascimento = document.querySelector('input#ano_nascimento')
    let idade = ano - Number(nascimento.value)
    let res = document.querySelector('#resultado')
    if (nascimento.value.length == 0 || nascimento.value > ano){
        alert('Verifique os valores')
    } else {
        var sexo = document.getElementsByName('sexo')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if(idade < 21){
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if(idade < 50){
                img.setAttribute('src', 'imagens/adulto.png')
            } else{
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebe-f.png')
            } else if(idade < 21){
                img.setAttribute('src', 'imagens/jovem-f.png')
            } else if(idade < 50){
                img.setAttribute('src', 'imagens/adulta.png')
            } else{
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} de ${idade} anos <br>`
        res.appendChild(img)
    }
}