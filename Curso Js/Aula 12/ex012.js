var agora   = new Date()
var horário = agora.getHours()
console.log(`Agora são exatamente ${horário} Horas.`)
if (horário < 12) {
    console.log("Bom Dia")
}else if (horário <=18) {
    console.log("Boa Tarde")
} else {
    console.log("Boa Noite")
}