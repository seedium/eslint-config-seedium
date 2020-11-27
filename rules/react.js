module.exports = {
    'plugins': ['react'],
    'rules': {
        'react/jsx-boolean-value': 'error',
        'react/jsx-closing-bracket-location': 'error',
        'react/jsx-handler-names': 'error',
        'react/jsx-indent-props': ['error', 2],
        'react/jsx-indent': ['error', 2],
        'react/jsx-key': 'error',
        'react/jsx-no-bind': ['error', {
            ignoreRefs: true,
            allowArrowFunctions: true
        }],
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-uses-react': 'off',
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines':  ['error', {
            declaration: true,
            assignment: true,
            return: true
        }],
        'react/no-find-dom-node': 'error',
        'react/no-render-return-value': 'error',
        'react/require-render-return': 'error',
        'react/no-danger': 'error',
        'react/no-deprecated': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-is-mounted': 'error',
        'react/no-multi-comp': ['error', { 'ignoreStateless': true }],
        'react/no-unknown-property': 'error',
        'react/prefer-es6-class': 'error',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/self-closing-comp': 'error',
        // 'react/sort-comp': ['error', {
        //     'order': [
        //         'lifecycle',
        //         '/^handle.+$/',
        //         '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        //         'everything-else',
        //         '/^render.+$/',
        //         'render'
        //     ]
        // }],
        'react/style-prop-object': 'error',
        'react/no-unused-prop-types': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-children-prop': 'error',
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        'react/jsx-tag-spacing': 'error',
        'react/require-default-props': 'error',
        'react/forbid-foreign-prop-types': 'off',
        'react/void-dom-elements-no-children': 'error',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-comment-textnodes': 'error',
        'react/no-string-refs': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-will-update-set-state': 'error',
        'react/default-props-match-prop-types': 'off',
        'react/no-redundant-should-component-update': 'error',
        'react/jsx-closing-tag-location': 'error'
    }
};
