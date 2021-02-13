var idade = 6
console.log(`Você tem ${idade} Anos `)
console.log("Situação Eleitoral")
if (idade < 16) {
    console.log('Não posui idade sulficiente')
} else {
    if (idade < 18 || idade > 65) {
        console.log("Voto Opcional")
    }else {
        console.log("Seu Voto agora é obrigatório!")    
    }
}