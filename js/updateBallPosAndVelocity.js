const directingVector = vec(1, 0)

const updateBallPosAndVelocity = ({ ballPos, ballVelocity, planePos }, delta) => {
    const isOutOfBoundsTop = ballPos.y <= 0
    const isOutOfBoundsLeft = ballPos.x <= 0
    const isOutOfBoundsRight = ballPos.x >= ctx.canvas.width
    const isOutOfBoundsBottom = ballPos.y >= ctx.canvas.height

    const isCollidingWithPaddle =
           ballPos.x >= planePos.x
        && ballPos.x <= planePos.x + PLANE.width
        && (ballPos.y + BALL.size) >= planePos.y

    if (isCollidingWithPaddle) {
        const newVelocity = deflect(directingVector, ballVelocity)
        return {
            ballPos: add(ballPos, newVelocity),
            ballVelocity: newVelocity,
        }
    }

    if (isOutOfBoundsTop) {
        const newVelocity = mul(ballVelocity, vec(1, -1))
        return {
            ballPos: add(ballPos, newVelocity),
            ballVelocity: newVelocity,
        }
    }
    if (isOutOfBoundsLeft) {
        const newVelocity = mul(ballVelocity, vec(-1, 1))
        return {
            ballPos: add(ballPos, newVelocity),
            ballVelocity: newVelocity
        }
    }
    if (isOutOfBoundsRight) {
        const newVelocity = mul(ballVelocity, vec(-1, 1))
        return {
            ballPos: add(ballPos, newVelocity),
            ballVelocity: newVelocity,
        }
    }
    if (isOutOfBoundsBottom) {
        const newVelocity = mul(ballVelocity, vec(1, -1))
        return {
            ballPos: add(ballPos, newVelocity),
            ballVelocity: newVelocity,
        }
    }
    return {
        ballPos: add(ballPos, ballVelocity),
    }
}
