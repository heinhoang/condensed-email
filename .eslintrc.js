module.exports = {
    "env": {
        "es6": true,
        "browser": true,
        "mocha": true,
        "node": true,
        "phantomjs": true,
        "protractor": true
    },
    "extends": "airbnb",
    "rules": {
        "import/no-unresolved": [2, { "commonjs": true, "amd": true }],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },
    "globals": {
        "navigator": true,
        "fetch": true,
    }
};