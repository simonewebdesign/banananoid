/*
* R = 2*(V dot N)*N - V
* V: velocity vector
* N: directing vector, i.e. a normalized vector of the plane surface (paddle or wall)
* return: the new velocity vector
* TODO: For more realism, you can multiply velT and velN by constants
* representing friction and restitution, respectively.
*/
const deflect = (N, V) => {
    const dot = V.dot(N)
    const v1 = N.multiplyScalar(2 * dot)
    return v1.subSelf(V)
}
