import reactPlugin from 'eslint-plugin-react';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import prettierPlugin from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['node_modules/**'],
    files: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js', 'src/**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: tsParser,
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': tsPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      'prettier/prettier': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^react-dom', '^@react'],
            ['^@?\\w'],
            ['^(@|components|utils|hooks|config|lib|services)(/.*|$)'],
            ['^\\./', '^\\.\\.'],
            ['^.+\\.(css|scss|sass|less)$'],
            ['^\\u0000'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
