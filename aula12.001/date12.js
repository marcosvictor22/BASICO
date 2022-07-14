var agora = new Date()
var diaSem = agora.getDay()
/*
0-Domingo
1-Segunda
2-Terca 
3-Quarta
4-Quinta
5-Sexta
6-Sabado
*/
console.log(diaSem)

//swith e importante para voce testar dados pontuais, valores pontuais.
//swith nao fuciona com intervalos, ele so funciona com numeros inteiros e com caracteres
//swith tambem fuciona com strings...

switch (diaSem) {

    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('Terca')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break







}