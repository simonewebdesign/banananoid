// Initial render (will happen only once)
const initialRender = () => {
    initialState.bricks.forEach((row, rowIdx) => {
        const rowNumber = rowIdx + 1

        row.forEach((brick, brickIdx) => {
            if (brick) {
                const x = brickIdx * BRICK.width
                const y = rowIdx * BRICK.height + BRICK.yOffset
                const color = BRICK.colors[brickIdx % numberOfColors]
                ctx.fillStyle = color
                ctx.fillRect(x, y, BRICK.width, BRICK.height)
            }
        })
    })
}

const render = state => {
    // Clear screen
    ctx.clearRect(0, canvasYToClearFrom, ctx.canvas.width, ctx.canvas.height)

    const { ballPos, planePos } = state

    ctx.fillRect(planePos.x, planePos.y, PLANE.width, PLANE.height)

    ctx.beginPath()
    ctx.arc(ballPos.x, ballPos.y, BALL.size, BALL.startAngle, BALL.endAngle, BALL.anticlockwise)
    ctx.fill()
}
