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
  const color = '#' + getRandomColor()
  el.target.style.backgroundColor = color
  el.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
// Remove color
function removeColor(el) {
  el.target.style.backgroundColor = '#1d1d1d'
  el.target.style.boxShadow = `0 0 2px #000`
}
// Get random color
function getRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16)
}
