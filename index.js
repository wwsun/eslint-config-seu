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
        "radix": "off",
        "max-len": "off",
        "arrow-parens": "off",
        "comma-dangle": "off",
        "class-method-use-this": "off",
        "no-restricted-syntax": "off",
        "no-underscore-dangle": "off",
        "no-param-reassign": "off",
        "no-empty-pattern": "off",
        "object-curly-newline": "off",
        "prefer-destructuring": "off",
        "react/jsx-filename-extension": [0],
        "react/no-did-mount-set-state": "off",
        "react/jsx-closing-tag-location": "off",
        "react/jsx-closing-bracket-location": "off"
    }
}
