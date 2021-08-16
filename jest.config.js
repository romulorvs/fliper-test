module.exports = {
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.ts'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/build/',
    '<rootDir>/public/'
  ],
  moduleNameMapper: {
    '\\.(scss|sass|css|jpg|jpeg|png|svg)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
}
