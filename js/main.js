const update = (state = initialState, delta) => {
    return {
        ...state,
        ballPos: updateBallPos(state, delta),
        planePos: updatePlanePos(state, delta),

    }
}

const updateBallPos = ({ ballPos, ballVelocity }, delta) => {
    const isOutOfBoundsTop = ballPos.y <= 0
    const isOutOfBoundsLeft = ballPos.x <= 0
    const isOutOfBoundsRight = ballPos.x >= ctx.canvas.width
    const isOutOfBoundsBottom = ballPos.y >= ctx.canvas.height

    if (isOutOfBoundsTop) {
        const newVelocity = ballVelocity.multiplySelf(new Vector2(1, -1))
        return ballPos.addSelf(newVelocity)
    }
    if (isOutOfBoundsLeft) {
        const newVelocity = ballVelocity.multiplySelf(new Vector2(-1, 1))
        return ballPos.addSelf(newVelocity)
    }
    if (isOutOfBoundsRight) {
        const newVelocity = ballVelocity.multiplySelf(new Vector2(-1, 1))
        return ballPos.addSelf(newVelocity)
    }
    if (isOutOfBoundsBottom) {
        const newVelocity = ballVelocity.multiplySelf(new Vector2(1, -1))
        return ballPos.addSelf(newVelocity)
    }
    return ballPos.addSelf(ballVelocity)
}

const updatePlanePos = ({ planePos }, delta) => {
    if (keysDown['ArrowLeft']
        && planePos.x > 0) {
        return planePos.addSelf(new Vector2(-5, 0))
    } else if (keysDown['ArrowRight']
        && planePos.x + PLANE.width <= ctx.canvas.width) {
        return planePos.addSelf(new Vector2(5, 0))
    }
    return planePos
}

const render = state => {
    // Clear screen
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    const { ballPos, planePos } = state

    ctx.fillRect(planePos.x, planePos.y, PLANE.width, PLANE.height)

    ctx.arc(ballPos.x, ballPos.y, BALL.size, BALL.startAngle, BALL.endAngle, BALL.anticlockwise)
    ctx.fill()
}

// Cross-browser support for requestAnimationFrame
const win = window,
    raf =
         win.requestAnimationFrame
      || win.webkitRequestAnimationFrame
      || win.mozRequestAnimationFrame
      || win.msRequestAnimationFrame
      || win.oRequestAnimationFrame

const fpsRangeInput = document.getElementById('fps')
const getFps = () => parseInt(fpsRangeInput.value)

let framesCount = 0

let then = Date.now()

// The main game loop
const main = state => {
    const now = Date.now()
    const delta = (now - then) / 1000

    const newState = update(state, delta)

    raf(main.bind(null, newState))

    const fps = getFps()
    const interval = 1 / fps

    if (delta > interval) {
        framesCount++

        render(newState)

        // Update time
        // now - (delta % interval) is an improvement over just
        // using then = now, which can end up lowering overall fps
        then = now - (delta % interval)
    }
}

main()
