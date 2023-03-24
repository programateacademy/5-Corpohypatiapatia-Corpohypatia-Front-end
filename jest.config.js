module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(jpeg|jpg|png|gif)$": "<rootDir>/__mocks__/fileMock.js",
    "^/src/assets/img/(.*)$": "<rootDir>/__mocks__/emptyMock.js"
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/src/assets/img"
  ]
};