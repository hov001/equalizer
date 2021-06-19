const board = document.getElementById('board')
const SQUARE_COUNT = 500

for (let i = 0; i < SQUARE_COUNT; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  // Events
  square.addEventListener('mouseover', (evt) => setColor(evt))
  square.addEventListener('mouseleave', (evt) => removeColor(evt))

  board.appendChild(square)
}

// Set color
function setColor(el) {
  el.target.style.backgroundColor = 'red'
}
// Remove color
function removeColor(el) {
  el.target.style.backgroundColor = '#1d1d1d'
}
