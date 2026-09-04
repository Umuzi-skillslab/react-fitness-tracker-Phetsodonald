module.exports = {
  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],

  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  moduleFileExtensions: ['js', 'jsx'],

  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  moduleNameMapper: {
        "\\.module\\.css$": "identity-obj-proxy",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
};