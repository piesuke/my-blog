module.exports = {
  "extends": [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
  ],
  plugins: ['sort-keys-fix', 'import', 'unused-imports', 'react-hooks'],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
}
