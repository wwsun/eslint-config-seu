'use strict';

module.exports = {
    extends: 'airbnb',
    env: {
        "browser": true
    },
    parser: 'babel-eslint',
    parserOptions: {
        "sourceType": 'module',
    },
    rules: {
        "intent": [2, 2, { "SwitchCase": 1 }],
        "require-yield": "off",
        "camelcase": "off",
        "react/no-did-mount-set-state": "off"
    }
}
