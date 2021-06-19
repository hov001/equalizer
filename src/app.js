const input = document.getElementById('count')
const board = document.getElementById('board')

let SQUARE_COUNT = 260

createSquare(SQUARE_COUNT)

input.addEventListener('blur', (evt) => {
  createSquare(evt.target.value)
})
input.addEventListener('keydown', (evt) => {
  if (evt.key === 'Enter') createSquare(evt.target.value)
})

// Create square
function createSquare(counter) {
  if (counter > 0 && counter <= 500) {
    board.innerHTML = ''

    for (let i = 0; i < counter; i++) {
      const square = document.createElement('div')
      square.classList.add('square')

      // Events
      square.addEventListener('mouseover', setColor)
      square.addEventListener('mouseleave', removeColor)

      board.appendChild(square)
    }
  }
}

// Set color
function setColor(evt) {
  const color = '#' + getRandomColor()
  evt.target.style.backgroundColor = color
  evt.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
// Remove color
function removeColor(evt) {
  evt.target.style.backgroundColor = '#1d1d1d'
  evt.target.style.boxShadow = `0 0 2px #000`
}
// Get random color
function getRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16)
}
