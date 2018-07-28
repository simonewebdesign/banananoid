const ballSize = 5

const BALL = {
    size: ballSize,
    x: canvas.width / 2 - ballSize / 2,
    y: canvas.height / 2 - ballSize / 2,
    startAngle: 0,
    endAngle: 2 * Math.PI,
    anticlockwise: false,
}


const planeWidth = 80

const PLANE = {
    width: planeWidth,
    height: 10,
    x: canvas.width / 2 - planeWidth / 2,
    y: canvas.height - 30,
}

const numberOfRows = 3
const numberOfBricksPerRow = 9
const BRICK = {
    width: canvas.width / numberOfBricksPerRow,
    height: 20,
    colors: [
        '#f00',
        '#0f0',
        '#00f',
        '#ff0',
        '#0ff',
        '#f0f',
    ],
    yOffset: 50,
}
const numberOfColors = BRICK.colors.length
const canvasYToClearFrom = BRICK.height * numberOfRows + BRICK.yOffset
