/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'json', 'html'],
  coverageReporters: ['html'],
  testEnvironment: 'node',
  runner: 'groups',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/apps/**/*.ts',
    '**/libs/**/*.ts',
    '!**/node_modules/**',
  ],
};
