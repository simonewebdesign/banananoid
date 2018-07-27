Vector2 = function ( x, y ) {
    this.x = x || 0
    this.y = y || 0
}

const vec = (x, y) =>
    new Vector2(x, y)

const clone = v =>
    new Vector2(v.x, v.y)

const add = (v1, v2) =>
    new Vector2(v1.x + v2.x, v1.y + v2.y)

const sub = (v1, v2) =>
    new Vector2(v1.x - v2.x, v1.y - v2.y)

const mul = (v1, v2) =>
    new Vector2(v1.x * v2.x, v1.y * v2.y)

const multiplyScalar = (v, s) =>
    new Vector2(v.x * s, v.y * s)

const divideScalar = (v, s) =>
    s ? new Vector2(v.x / s, v.y / s)
      : new Vector2(0, 0)

const dot = (v1, v2) =>
    v1.x * v2.x + v1.y * v2.y

const lengthSq = v =>
    v.x * v.x + v.y * v.y

const length = v =>
    Math.sqrt(lengthSq(v))

const normalize = v =>
    divideScalar(length(v))

const equal = (v1, v2) =>
    ( v1.x === v2.x ) && ( v1.y === v2.y )

const flipLeft = v =>
    new Vector2(v.x * -1, v.y)

const flipRight = v =>
    new Vector2(v.x, v.y * -1)
