lista.innerHTML='                                  '
function tabuada(){
    var txtn=document.getElementById('txtn')
    var tab=document.getElementById('listatab')
    if(txtn.value.length==0){
        alert('Informe um número!')
    }else{
        var n=Number(txtn.value)
        tab.innerHTML=''
        for(c=0;c<=10;c++){
            var item=document.createElement('option')
            item.text=`${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}