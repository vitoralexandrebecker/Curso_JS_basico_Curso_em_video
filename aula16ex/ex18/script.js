var num = document.getElementById('txtn')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
var valores = []

function isNum(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if (isNum(num.value) && !inLista(num.value, valores)){
        var n = Number(num.value)
        valores.push(n)
        var item = document.createElement('option')
        item.text=`${n} adicionado!`
        lista.appendChild(item)
        res.innerHTML=''
}else{
    alert('Número incorreto ou se encontra na lista!')
}
num.value=''
num.focus()
}

function finalizar(){
    if (valores.length == 0){
        alert='Adicione valores antes de finalizar!'
    }else{
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML=''
        res.innerHTML+=`<p>Ao todo temos ${tot} números cadastrados!`
        res.innerHTML+=`<p>O maior número informado foi ${maior}.`
        res.innerHTML+=`<p>O menor número informado foi ${menor}.`
        res.innerHTML+=`<p>A soma de todos os valores é ${soma}.`
        res.innerHTML+=`<p>A média de todos os números é ${media}.`
    }
}