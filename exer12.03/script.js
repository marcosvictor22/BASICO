function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO, tente novamente!')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {

                //crianca
                img.setAttribute('src', 'criancamas.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemmen.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem.jpg')
            } else if (idade < 100) {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            } else {
                img.setAttribute('src', 'tarta.jpg')
            }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)



        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'criancafem.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'girl.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher.jpg')
            } else if (idade < 100) {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            
        } else {
            img.setAttribute('src', 'rainha.jpg')
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    }
}

