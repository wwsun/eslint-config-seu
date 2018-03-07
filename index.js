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
        "indent": [2, 2, { "SwitchCase": 1 }],
        "require-yield": "off",
        "camelcase": "off",
        "react/jsx-filename-extension": [0],
        "react/no-did-mount-set-state": "off"
    }
}
