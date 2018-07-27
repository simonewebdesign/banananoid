const initialBallVelocityX = Math.random() > 0.5 ? 1 : -1

const numberOfRows = 3
const numberOfItemsPerRow = 6

const bricks =
    Array(numberOfRows)
        .fill(Array(numberOfItemsPerRow))
        .map(a => a.fill(true))

const initialState = {
    score: 0,
    isGameStarted: false,

    ballPos: new Vector2(BALL.x, BALL.y),

    // velocity is speed with a direction (normalized vector)
    // (0, 1) South
    // (1, 0) East ->
    // (-1, 0) West <-
    // (0, -1) North
    ballVelocity: new Vector2(initialBallVelocityX, 1),

    planePos: new Vector2(PLANE.x, PLANE.y),

    bricks,
}

Object.freeze(initialState)

const gameState = JSON.parse(JSON.stringify(initialState))
