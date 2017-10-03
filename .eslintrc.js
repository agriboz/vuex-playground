module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: ['html'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
  },
  // add your custom rules here
  rules: {},
  globals: {},
};
