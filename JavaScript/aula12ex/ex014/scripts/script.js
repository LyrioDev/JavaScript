function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = "manha.jpg"
        document.body.style = 'background-color: #86e6f2'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = "tarde.jpg"
        document.body.style = 'background-color: #d48331'
    } else {
        //Boa noite
        img.src = "noite.jpg"
        document.body.style = 'background-color: #141823'
    }
}