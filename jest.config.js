module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transformIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,ts,vue}",
    "!**/node_modules/**",
    "!**/coverage/lcov-report/**",
    "!babel.config.js",
    "!jest.config.js",
    "!postcss.config.js",
    "!tailwind.config.js",
    "!block-navigation.js",
    "!prettify.js",
    "!sorter.js",
    "!main.ts"
  ],
}

