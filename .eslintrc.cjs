module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "airbnb-base",
    ],
    parserOptions: {
        ecmaVersion: 15,
        sourceType: "module",
    },
    rules: {
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        indent: ["error", 4],
        eqeqeq: "off",
        "import/prefer-default-export": "off",
        "linebreak-style": 0,
    },
};
