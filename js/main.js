const update = () => {}
const render = () => {}

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
ctx.fillStyle = 'green'
ctx.fillRect(10, 10, 100, 100)


// The main game loop
const main = () => {
    const now = Date.now()
    const delta = now - then

    update(delta / 1000)
    render()

    then = now

    // Request to do this again ASAP
    requestAnimationFrame(main)
}

// Cross-browser support for requestAnimationFrame
const win = window,
    requestAnimationFrame =
         win.requestAnimationFrame
      || win.webkitRequestAnimationFrame
      || win.msRequestAnimationFrame
      || win.mozRequestAnimationFrame

let then = Date.now()

main()
