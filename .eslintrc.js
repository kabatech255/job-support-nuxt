const OFF = 0
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    // "2語以上"のルールを完全にオフ
    'vue/multi-word-component-names': 'off',
    'vue/valid-v-slot': 'off',
    // DBのカラム名(スネークケース)に合わせることもあるのでオフ
    camelcase: [OFF, 'always'],
  },
}
