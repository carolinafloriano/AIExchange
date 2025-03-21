module.exports = {
    root: true,
    env: {
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended' // ESSENCIAL!
    ],
    plugins: ['vue', '@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': 'error', // ESSENCIAL!
        'vue/multi-word-component-names': 'off',
    },
};
