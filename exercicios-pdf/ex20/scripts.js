function iniciar(){
    let mes = document.querySelector('input#estacao')
    let texto = document.querySelector('#texto')
    switch(mes.toLowerCase()){
        case 'janeiro': case 'fevereiro': case 'março':
            texto.innerHTML = 'Verão'
            break
        case 'abril': case 'maio': case 'junho':
            texto.innerHTML = 'Outono'
            break
        case 'julho': case 'agosto': case 'setembro':
            texto.innerHTML = 'Inverno'
            break
        case 'outubro': case 'novembro': case 'dezembro':
            texto.innerHTML = 'Primavera'
            break
    }
}