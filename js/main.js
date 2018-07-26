/*
* R = 2*(V dot N)*N - V
* V: velocity vector
* N: directing vector, i.e. a normalized vector of the plane surface (paddle or wall)
* return: the new velocity vector
* TODO: For more realism, you can multiply velT and velN by constants
* representing friction and restitution, respectively.
*/
const deflect = (N, V) => {
    const dot = V.dot(N)
    const v1 = N.multiplyScalar(2 * dot)
    return v1.subSelf(V)
}

const update = (state = initialState, delta) => {
    const isGameStarted = !state.isGameStarted && keysDown[' '] ? true : state.isGameStarted

    return {
        ...state,
        ...updateBallPosAndVelocity(state, delta),
        planePos: updatePlanePos(state, delta),
        isGameStarted,
    }
}

const updateBallPosAndVelocity = ({ ballPos, ballVelocity, planePos }, delta) => {
    const isOutOfBoundsTop = ballPos.y <= 0
    const isOutOfBoundsLeft = ballPos.x <= 0
    const isOutOfBoundsRight = ballPos.x >= ctx.canvas.width
    const isOutOfBoundsBottom = ballPos.y >= ctx.canvas.height

    const isCollidingWithPaddle =
           ballPos.x >= planePos.x
        && ballPos.x <= planePos.x + PLANE.width
        && (ballPos.y + BALL.size) >= planePos.y

    // First of all, I need to calculate the wall normal properly.
    // I start by getting the A and B points (i.e. vectors):
    const a = planePos.clone()
    const b = new Vector2(planePos.x + PLANE.width, planePos.y)

    // Then I get the directing vector:
    const directingVector = b.subSelf(a).normalize() // it just happens to be constant: (1, 0)

    // Finally I reflect the ball
    if (isCollidingWithPaddle) {
        const newVelocity = deflect(directingVector, ballVelocity)
        return {
            ballPos: ballPos.addSelf(newVelocity),
            ballVelocity: newVelocity,
        }
    }

    if (isOutOfBoundsTop) {
        const newVelocity = ballVelocity.multiplySelf(new Vector2(1, -1))
        return {
            ballPos: ballPos.addSelf(newVelocity),
        }
    }
    if (isOutOfBoundsLeft) {
        const newVelocity = ballVelocity.multiplySelf(new Vector2(-1, 1))
        return {
            ballPos: ballPos.addSelf(newVelocity),
        }
    }
    if (isOutOfBoundsRight) {
        const newVelocity = ballVelocity.multiplySelf(new Vector2(-1, 1))
        return {
            ballPos: ballPos.addSelf(newVelocity),
        }
    }
    if (isOutOfBoundsBottom) {
        const newVelocity = ballVelocity.multiplySelf(new Vector2(1, -1))
        return {
            ballPos: ballPos.addSelf(newVelocity),
        }
    }
    return {
        ballPos: ballPos.addSelf(ballVelocity),
    }
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

    ctx.beginPath()
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
