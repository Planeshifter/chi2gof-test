/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@stdlib/blas(.*)$': '<rootDir>/node_modules/@stdlib/blas$1/lib/main.js',
  }
};