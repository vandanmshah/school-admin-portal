module.exports = {
  extends: ['@cleartax'],
  overrides: [
    {
      files: ['**/*.test.{ts,tsx}'],
      rules: {
        'promise/catch-or-return': 'off',
        // https://github.com/jest-community/eslint-plugin-jest/blob/ff25588/docs/rules/expect-expect.md#assertfunctionnames
        'jest/expect-expect': ['error', { assertFunctionNames: ['expect', 'request.*.expect'] }],
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
