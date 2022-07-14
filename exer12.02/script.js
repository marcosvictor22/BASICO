function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 15
    msg.innerHTML = `Agora sao ${hora} horas..`
    
    if (hora >= 0 && hora < 12) {
        //sera bom dia
        img.src = 'imgmanha.jpg' 
        document.body.style.background = '#e2cd9f'

    } else if(hora >= 12 && hora <= 18) {
        //sera boa tarde
        img.src = 'imgtarde.jpg'
        document.body.style.background = '#b9846f'
    } 
    else{
        //sera boa noite
        img.src = 'imgnoite.jpg'
        document.body.style.background = '#515154'
    }



}
