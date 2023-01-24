/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */
const testPath = './tests';
const tsconfig = `${testPath}/tsconfig.json`;

module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/__mocks__/fileMock.ts',
  },
  globals: {
    'ts-jest': {
      tsconfig,
    },
  },
  setupFilesAfterEnv: [`./tests/jest.setup.ts`, './tests/__mocks__/envMock.ts'],
  testEnvironment: 'jsdom',
  testMatch: [`<rootDir>${testPath}/src/**/*.test.[jt]s?(x)`],
  collectCoverage: true,
  coverageDirectory: `${testPath}/coverage`,
  coverageProvider: 'v8',
};
