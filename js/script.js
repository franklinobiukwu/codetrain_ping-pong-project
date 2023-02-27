// // Score.js imports
// import * as scorejs from './score.js'

// // Assiging selected country to the game arena display
// scorejs.playerCountry.innerHTML = localStorage.getItem('ddvalue')

// scorejs.computerCountry.innerHTML = localStorage.getItem('ddvalueC')

//Update Loop
import Ball from './ball.js'

const ball = new Ball(document.getElementById('ball'))

function update(time) {
  // console.log(time)
  window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)
