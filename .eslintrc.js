module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    },
    "globals": {
        "BALL": false,
        "PLANE": false,
        "Vector2": false,
        "canvas": false,
        "ctx": false,
        "initialState": false,
        "keysDown": false,
        "vec": false,
        "clone": false,
        "add": false,
        "sub": false,
        "mul": false,
        "multiplyScalar": false,
        "divideScalar": false,
        "dot": false,
        "lengthSq": false,
        "length": false,
        "normalize": false,
        "equal": false,
        "flipLeft": false,
        "flipRight": false,
    }
};
