function carregar(){
    var agr = new Date()
    var hora = agr.getHours()
    var min = agr.getMinutes()
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    msg.innerHTML = (`Agora são ${hora}:${min}`)

    if(hora >= 0 && hora < 12){
        msg.innerHTML += (` da manhã.`)
        img.src = 'fotoManha.png' 
        document.body.style.background = 'wheat'
    } else if(hora >= 12 && hora < 18){
        msg.innerHTML += (` da tarde.`)
        img.src = 'fotoTarde.png'
        document.body.style.background = 'orange'
    } else{
        msg.innerHTML += (` da noite.`)
        img.src = 'fotoNoite.png'
        document.body.style.background = 'black'
    }
}