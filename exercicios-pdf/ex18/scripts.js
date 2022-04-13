const numero_escolhido = Math.floor(Math.random() * 5) + 1
        function advinhe(){
            var num_chute = document.querySelector('#palpite')
            var num_chute = Number(num_chute.value)
            let texto = document.querySelector('.texto')
            if (num_chute == numero_escolhido){
                texto.innerHTML = `Você chutou ${num_chute}. Você <strong>Acertou</strong>!`
            } else if(num_chute < numero_escolhido){
                texto.innerHTML += `<br>Você chutou ${num_chute}. Meu número é <strong>Maior</strong>`
            } else {
                texto.innerHTML += `<br>Você chutou ${num_chute}. Meu número é <strong>Menor</strong>`
            }
        }