const update = (state = gameState, delta) => {
    const isGameStarted = !state.isGameStarted && keysDown[' '] ? true : state.isGameStarted
    const isGameOver = state.ballPos.y > state.planePos.y

    if (isGameOver) {
        return initialState
    }

    return {
        ...state,
        ...updateBallPosAndVelocity(state, delta),
        planePos: updatePlanePos(state, delta),
        isGameStarted,
    }
}
