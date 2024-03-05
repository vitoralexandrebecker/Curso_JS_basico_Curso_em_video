function contar(){
    var inicio=document.getElementById('txtinicio').value
    var inicionum=Number(inicio);
    var fim=document.getElementById('txtfim').value
    var fimnum=Number(fim);
    var passo=document.getElementById('txtpasso').value
    var passonum=Number(passo);
    var txtres=document.getElementById('res')
    txtres.innerHTML=''
    if(fimnum==0 || passo=='' || fimnum<inicionum || passonum>fimnum){
        txtres.innerHTML='Impossível contar!'
        return contar()
    }
    else if(passo==0){
        alert('Passo inválido! Considerando PASSO 1!')
        passonum=1 
    }
    while(inicionum<=fimnum){
        txtres.innerHTML+=`${inicionum} 👉`
        inicionum=inicionum+passonum
    }
    txtres.innerHTML+='🏁'
}