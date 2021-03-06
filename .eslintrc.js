/*
 * @Descripttion:
 * @version:
 * @Author: wenlan
 * @Date: 2022-01-14 15:22:01
 * @LastEditors: wenlan
 * @LastEditTime: 2022-02-22 23:00:24
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended', //eslint 推荐
    'plugin:vue/vue3-recommended', //vue 推荐
    'plugin:@typescript-eslint/recommended', //eslint对ts语法推荐规范
    'plugin:prettier/recommended', //prettier推荐 解决eslint prettier冲突
    'prettier' //必须写最后
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'no-var': 'error',
    allowEmptyCatch: 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 针对模版中未使用的变量
    'vue/no-unused-vars': [
      'error',
      {
        ignorePattern: '^_'
      }
    ]
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  }
}
