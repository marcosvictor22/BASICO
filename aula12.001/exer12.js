var agora = new Date()    //esse comando  na var, me faz ter acesso a hora do meu computador...
var hora = agora.getHours()
console.log(`Agora sao extamente ${hora} hoas.`)
if (hora <12){
    console.log('Bom Dia!') //se a hora for abaixo do meio dia (12), sera bom dia!!
} else if (hora <=18) {
    console.log('Boa Tarde!') //se for menor ou igual a seis horas (18), sera boa tarde!
} else {
    console.log('Boa Noite!')
}