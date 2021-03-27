module.exports = {
  verbose: true,
  rootDir: './',
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  testRegex: '/*.test.js$',
  collectCoverage: true,
  coverageDirectory: 'test-coverage',
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/src/helpers/test/style-mock.js',
  },
};
