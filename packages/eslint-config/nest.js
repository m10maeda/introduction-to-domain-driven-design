/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['./index.js', './+jest.js', 'prettier'],
  overrides: [
    {
      files: '*.module.ts',
      rules: {
        '@typescript-eslint/no-extraneous-class': [
          'error',
          {
            allowWithDecorator: true,
          },
        ],
      },
    },
  ],
};
