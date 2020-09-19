module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
    "mocha": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12
  },
  "rules": {
    'semi': 1,
    'indent': [ 'error', 2 ],
    'comma-dangle': [ 'error', {
      'arrays': 'never',
      'functions': 'never'
    } ],
    'quotes': [ 'error', 'single' ],
    'no-trailing-spaces': [ 'error', { 'ignoreComments': true } ],
    'prefer-const': 'error',
    'brace-style': [ 'error', '1tbs', { 'allowSingleLine': true } ],
    'array-bracket-spacing': [ 'error', 'always', { 'singleValue': false } ]
  }
};
