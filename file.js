// Creo due cicli uno per il pc e uuno per il giocatore 








let humanGamer = Math.floor(Math.random() * 6 + 1)
console.log(humanGamer)
let pcGamer = Math.floor(Math.random() * 6 + 1)
console.log(pcGamer)

// elementHuman.innerHTML = humanGamer
// elementPc.innerHTML = pcGamer
if (humanGamer > pcGamer) {
    console.log('Hai vinto Tu')
} else if (humanGamer < pcGamer) {
    console.log('Hai vinto')
} else {
    console.log('parità')
}
