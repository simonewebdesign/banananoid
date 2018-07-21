// Available globals:
// - initialState
// - Vector2
// - keysDown

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.fillStyle = 'rgb(250, 250, 250)'
ctx.font = '18px Helvetica'
ctx.textAlign = 'left'
ctx.textBaseline = 'top'

const update = (state = initialState, delta) => {
    return {
        ...state,
        x: state.x + 0.5,
        y: state.y + 0.5,
    }
}
const isStateChanged = () => true
const render = state => {
    ctx.fillText('hello world', state.x, state.y)
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
