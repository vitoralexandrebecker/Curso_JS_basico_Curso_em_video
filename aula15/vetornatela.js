var valores=[2,5,3,5,7,4,2,7]
valores.sort()
/*
for(i=0;i<valores.length;i++){
    console.log(`A posição ${i} tem valor de ${valores[i]}`)
}*/

for(let i in valores){
    console.log(`A posição ${i} tem o valor de ${valores[i]}`)
}