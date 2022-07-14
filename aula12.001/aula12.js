var idade = 68
console.log( ` voce tem ${idade} anos.`)
if(idade <16){
    console.log('nao volta')
}else{      //Podemos crias condicao dentro de condicao!
   if(idade <18 || idade > 65) {
       console.log( 'voto opcional')
   }
}