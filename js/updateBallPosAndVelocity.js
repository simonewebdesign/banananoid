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
