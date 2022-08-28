// Creo due cicli uno per il pc e uuno per il giocatore 
const el = document.getElementById('does-not-exist');
console.log(el); // 👉️ null








let humanGamer = Math.floor(Math.random() * 6)
let pcGamer = Math.floor(Math.random() * 6)
let elementHuman = document.querySelector('human')
let elementPc = document.querySelector('pc')
let textWinner = 'Hai vinto'
// elementHuman.innerHTML = humanGamer
// elementPc.innerHTML = pcGamer
if (humanGamer > pcGamer) {
    // elementHuman.append = `${textWinner}`
} else if (pcGamer > humanGamer) {
    // elementPc.append = `${textWinner}`

}
console.log(humanGamer)
console.log(pcGamer)