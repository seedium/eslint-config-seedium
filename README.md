eslint-config-seedium
----------------------

Eslint config that we use in Seedium

### How to use

1. Install config with eslint and eslint plugins

```
npm install -D eslint-config-seedium eslint eslint-plugin-react @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
```
yarn add --dev eslint-config-seedium eslint eslint-plugin-react @typescript-eslint/parser @typescript-eslint/eslint-plugin
```


2. Create own `.eslintrc`

```
{
    "extends": "seedium"
}
```

### Using with prettier
To use with prettier you should follow this steps:

1. Create file `.prettierc`

2. Our configuration:
```
{
  singleQuote: true,
  semi: true,
  jsxSingleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'always',
  printWidth: 80,
  proseWrap: 'never',
};
```
3. Install [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier):
```
yarn add --dev eslint-config-prettier
```
4. Update your `.eslintrc`:
```
{
    "extends": ["seedium", "prettier"]
}
```