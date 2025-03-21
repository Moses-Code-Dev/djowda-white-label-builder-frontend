import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      js,
      prettier: pluginPrettier,
    },
    extends: ['js/recommended', prettier],
    rules: {
      'prettier/prettier': 'error',
    },
  },
  pluginReact.configs.flat.recommended,
]);
