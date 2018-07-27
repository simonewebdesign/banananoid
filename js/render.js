const render = state => {
    // Clear screen
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    const { ballPos, planePos } = state

    ctx.fillRect(planePos.x, planePos.y, PLANE.width, PLANE.height)

    ctx.beginPath()
    ctx.arc(ballPos.x, ballPos.y, BALL.size, BALL.startAngle, BALL.endAngle, BALL.anticlockwise)
    ctx.fill()
}
