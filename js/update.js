const update = (state = initialState, delta) => {
    const isGameStarted = !state.isGameStarted && keysDown[' '] ? true : state.isGameStarted

    return {
        ...state,
        ...updateBallPosAndVelocity(state, delta),
        planePos: updatePlanePos(state, delta),
        isGameStarted,
    }
}
