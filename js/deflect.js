/*
* R = 2*(V dot N)*N - V
* V: velocity vector
* N: directing vector, i.e. a normalized vector of the plane surface (paddle or wall)
* return: the new velocity vector
* TODO: For more realism, you can multiply velT and velN by constants
* representing friction and restitution, respectively.
*/
const deflect = (N, V) => {
    const dotProduct = dot(V, N)
    const v1 = multiplyScalar(N, 2 * dotProduct)
    return sub(v1, V)
}
