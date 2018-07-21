// Available globals:
// - state
// - Vector2
// - keysDown

const update = () => {}
const render = () => {}

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

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
const main = () => {
    raf(main)

    const now = Date.now()
    const delta = (now - then) / 1000
    const fps = getFps()
    const interval = 1 / fps

    if (delta > interval) {
        framesCount++

        update(delta)
        render()

        // Update time
        // now - (delta % interval) is an improvement over just
        // using then = now, which can end up lowering overall fps
        then = now - (delta % interval)
    }
}

main()
