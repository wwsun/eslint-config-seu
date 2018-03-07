# eslint-config-seu

[![NPM version][npm-image]][npm-url]

eslint rules for react projects

```bash
npm install eslint eslint-config-seu -D
```

create `.eslintrc` in root

```json
{
    "extends": [
        "eslint-config-seu"
    ]
}
```

ignore eslint files by add 'eslintIgnore' options in your project's 'package.json':

```json
// package.json
{
    "eslintIgnore": [
        "dist/",
        "webpack.config.js"
    ]
}
```


[npm-image]: https://badge.fury.io/js/eslint-config-seu.svg
[npm-url]: https://npmjs.org/package/eslint-config-seu
