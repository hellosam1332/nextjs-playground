module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
      'react-hooks'
    ],
    extends: [
      'airbnb-base',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'plugin:react/jsx-runtime',
    ],
    rules: {
      'prettier/prettier': 0,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  };