function carregar(){
    var msg=document.getElementById('msg')
    var img=document.getElementById('imagem')  
    var data =new Date()
    var hora= data.getHours() 
    msg.innerHTML=`Agora são ${hora} horas.`
    if (hora>=0&&hora<12){
        // BOM DIA
        img.src='manhaa.png'
        document.body.style.background='#ffa961'
    }else if (hora>=12&&hora<=18){
        // BOA TARDE
        img.src='tardee.png'
        document.body.style.background='#8a6c65'
    }else {
        //BOA NOITE
        img.src='noitee.jpg'
        document.body.style.background='#475d85'
    }
}
