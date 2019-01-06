module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['airbnb/base'],
  plugins: ['prettier'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'function-paren-newline': ['error', 'consistent'],
    'arrow-body-style': [0, 'never'],
    'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: false }],
    'prefer-destructuring': ['error', { object: false, array: false }],
    'max-len': [
      2,
      150,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        tabWidth: 2,
      },
    ],
    'no-unused-expressions': 0,
    'no-unneeded-ternary': 0,
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
  },
};
