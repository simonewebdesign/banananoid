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
