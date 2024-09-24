// eslint.config.js
import { defineConfig } from 'eslint-define-config';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default defineConfig({
    ignores: ['dist'],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        globals: {
            browser: true,
        },
        parser: typescriptParser,
    },
    plugins: {
        '@typescript-eslint': typescriptPlugin,
        react: reactPlugin,
        'react-hooks': reactHooksPlugin,
    },
    rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/react-in-jsx-scope': 'off', // React 17 이상에서는 필요 없음
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
});
