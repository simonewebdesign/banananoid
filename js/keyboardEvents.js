const keysDown = {}

document.addEventListener('keydown', event => {
    keysDown[event.key] = true
}, false)

document.addEventListener('keyup', event => {
    delete keysDown[event.key]
}, false)
