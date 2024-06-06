/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    './index.js',

    'airbnb',
    'airbnb/hooks',

    './rules/variables',
    './rules/imports',

    'plugin:storybook/recommended',

    './rules/react.js',
    './rules/jsx-a11y.js',

    'plugin:@next/next/core-web-vitals',

    './+jest.js',
    'plugin:testing-library/react',

    'prettier',
  ],
  overrides: [
    {
      files: '*.ts?(x)',
      extends: [
        'airbnb-typescript',

        './rules/variables',
        './rules/imports',
        './rules/typescript',
        './rules/react.js',
        './rules/jsx-a11y.js',

        'prettier',
      ],
    },

    {
      files: ['.storybook/**/*.ts?(x)', '*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        'import/no-extraneous-dependencies': 'off',

        'import/prefer-default-export': 'error',
        'import/no-default-export': 'off',

        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
};
