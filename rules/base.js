module.exports = {
    'parser': '@typescript-eslint/parser',
    'env': {
        'browser': true,
        'node': true,
        'es6': true,
    },
    'parserOptions': {
        'sourceType': 'module',
        'ecmaFeatures': {
            'arrowFunctions': true,
            'blockBindings': true,
            'classes': true,
            'defaultParams': true,
            'destructuring': true,
            'forOf': true,
            'generators': true,
            'modules': true,
            'objectLiteralComputedProperties': true,
            'objectLiteralDuplicateProperties': false,
            'objectLiteralShorthandMethods': true,
            'objectLiteralShorthandProperties': true,
            'restParams': true,
            'spread': true,
            'superInFunctions': true,
            'templateStrings': true,
            'jsx': true,
        },
    },
    'rules':{
        // New
        'no-useless-escape': 'error',
        'no-duplicate-imports': 'error',
        'newline-before-return': 'error',
        'no-useless-rename': 'error',
        'object-property-newline': ['error', { 'allowMultiplePropertiesPerLine': true }],
        'no-useless-computed-key': 'error',
        'no-template-curly-in-string': 'error',
        'no-unsafe-negation': 'error',
        'no-global-assign': 'error',
        'object-curly-newline': ['error', { 'consistent': true }],
        'lines-between-class-members': ['error', 'always'],
        'array-callback-return': 'error',
        'default-param-last': 'error',
        'no-import-assign': 'error',
        'array-bracket-newline': ['error', 'consistent' ],
        'prefer-exponentiation-operator': 'error',
        'no-dupe-else-if': 'error',
        'no-constructor-return': 'error',
        'no-magic-numbers': ['error', { 'ignore': [-1, 0, 1, 2, 1024, 60, 24], 'ignoreArrayIndexes': true, 'ignoreDefaultValues': true, 'enforceConst': true }],

        // Possible errors
        'no-cond-assign': ['error', 'always'],
        'no-constant-condition': 'error',
        'no-control-regex': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty-character-class': 'error',
        'no-empty': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 0,
        'no-extra-parens': ['error', 'functions'],
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-negated-in-lhs': 'error',
        'no-obj-calls': 'error',
        'no-regex-spaces': 'error',
        'no-unreachable': 'error',
        'use-isnan': 'error',
        'valid-typeof': 'error',
        'no-unexpected-multiline': 0,
        'require-atomic-updates': 'error',
        'no-async-promise-executor': 'error',
        'no-misleading-character-class': 'error',
        'no-useless-catch': 'error',

        // Best Practices
        'block-scoped-var': 'error',
        'complexity': ['error', 30],
        'curly': ['error', 'multi-line'],
        'default-case': 'error',
        'dot-notation': ['error', { 'allowKeywords': true }],
        'eqeqeq': 'error',
        'guard-for-in': 'error',
        'no-alert': 1,
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-div-regex': 0,
        'no-else-return': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-implied-eval': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-multi-str': 'error',
        'no-native-reassign': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': ['error', { 'props': true }],
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-useless-call': 'error',
        'no-with': 'error',
        'radix': 'error',
        'wrap-iife': ['error', 'outside'],
        'yoda': 'error',

        // ES2015
        'arrow-parens': 0,
        'arrow-spacing': ['error', { 'before': true, 'after': true }],
        'constructor-super': 'error',
        'no-class-assign': 'error',
        'no-const-assign': 'error',
        'no-this-before-super': 0,
        'no-var': 'error',
        'object-shorthand': ['error', 'always'],
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',

        // Strict Mode
        'strict': ['error', 'never'],

        // Variables
        'no-catch-shadow': 'error',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-shadow-restricted-names': 'error',
        'no-shadow': 'error',
        'no-undef-init': 'error',
        'no-undef': 'error',
        'no-unused-vars': ['error', { "varsIgnorePattern": "React" }],

        // Node.js
        'callback-return': 'error',
        'no-mixed-requires': 'error',
        'no-path-concat': 'error',
        'no-sync': 'error',
        'handle-callback-err': 'error',
        'no-new-require': 'error',

        // Stylistic
        'newline-after-var': ['error', 'always'],
        'brace-style': ['error', '1tbs'],
        'camelcase': ['error', { 'properties': 'always' }],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'eol-last': 'error',
        // 'func-style': ['error', 'declaration'],
        'indent': ['error', 2],
        'jsx-quotes': ['error', 'prefer-single'],
        'linebreak-style': ['error', 'unix'],
        'max-nested-callbacks': ['error', 4],
        'new-parens': 'error',
        'no-array-constructor': 'error',
        'no-lonely-if': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }],
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-spaced-func': 'error',
        'no-trailing-spaces': 'error',
        'no-unneeded-ternary': 'error',
        // 'object-curly-spacing': ['error', 'always'],
        // 'space-in-brackets': ['error', 'always'],
        'one-var': ['error', 'never'],
        'padded-blocks': ['error', 'never'],
        'quotes': [1, 'single', 'avoid-escape'],
        'semi-spacing': ['error', { 'before': false, 'after': true }],
        'keyword-spacing': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never' }],
        'space-in-parens': ['error', 'never'],
        'space-unary-ops': ['error', { 'words': true, 'nonwords': false }],
        'spaced-comment': ['error', 'always'],
        'no-return-await': 'error',
        'prefer-promise-reject-errors': ['error', {'allowEmptyReject': true}],
        'no-compare-neg-zero': 'error',
        'no-buffer-constructor': 'error',
        'switch-colon-spacing': 'error',
        'for-direction': 'error',
        'semi-style': ['error', 'last'],
        'getter-return': 'error',
        'padding-line-between-statements': [
            'error',
            { 'blankLine': 'always', 'prev': 'block-like', 'next': '*' }
        ]
    },
    'overrides': [{
        'files': ['*.styled.ts'],
        'rules': {
            'no-magic-numbers': 'off',
            'no-undef': 'off'
        }
    }]
};
