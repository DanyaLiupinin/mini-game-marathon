const board = document.querySelector('#board')

const SQUARES_NUMBER = 998

const colors = ['#A5BEC4', '#4B5650', '#CF6E30', '#5A8687', '#1B545F']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor (el) {
    const color = getRandomColor()
    el.style.backgroundColor = color
    el.style.boxShadow = `0 0 2px ${color}, 0 0 15px ${color}`
}

function removeColor (el) {
    el.style.backgroundColor = 'rgb(223 130 71 / 60%)'
    el.style.boxShadow = `0 0 2px #000`
}

function getRandomColor () {
    const index = Math.floor(Math.random() * colors.length)

    return colors[index]
}