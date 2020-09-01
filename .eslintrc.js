module.exports = {
  extends: ['@cleartax', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'import', 'module-resolver'],

  overrides: [
    {
      files: ['**/*.test.{ts,tsx}'],
      rules: {
        'promise/catch-or-return': 'off',
        'jest/expect-expect': ['error', { assertFunctionNames: ['expect', 'request.*.expect'] }],
      },
    },
  ],
};
