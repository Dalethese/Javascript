function iniciar(){
    let input = document.querySelector('input#estacao')
    let mes = input.value
    console.log(mes)
    let estacao = ''
    let texto = document.querySelector('#texto')
    
    switch(mes){
        case 'janeiro': case 'fevereiro': case 'março':
            estacao = 'Verão'
            break
        case 'abril': case 'maio': case 'junho':
            estacao = 'Outono'
            break
        case 'julho': case 'agosto': case 'setembro':
            estacao = 'Inverno'
            break
        case 'outubro': case 'novembro': case 'dezembro':
            estacao = 'Primavera'
            break
    }

    texto.innerHTML = `${estacao}`
}