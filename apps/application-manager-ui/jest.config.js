// module.exports = {
//   name: 'application-manager-ui',
//   preset: '../../jest.config.js',
//   transform: {
//     '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
//     '^.+\\.[tj]sx?$': [
//       'babel-jest',
//       { cwd: __dirname, configFile: './babel-jest.config.json' },
//     ],
//   },
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
//   coverageDirectory: '../../coverage/apps/application-manager-ui',
// };


module.exports = {
  name: 'application-manager-ui',
  preset: '../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|vtt|pdf)$':
      '<rootDir>/src/test/fileMock.js',
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/apps/application-manager-ui',
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
    '^carbon-addons-iot-react/components/(.*)':
      '<rootDir>/node_modules/carbon-addons-iot-react/lib/src/components/$1',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/app/**/*.(ts|tsx)',
    '!**/app/app.tsx',
    '!**/app/routes/routes.tsx',
  ],
  coverageReporters: ['lcov', 'text', 'text-summary', 'cobertura'],
  coverageThreshold: {
    // these need to increase...
    global: {
      branches: 52,
      functions: 72,
      lines: 84,
      statements: 84,
    },
  },
  setupFilesAfterEnv: ['./setupTests.tsx'],
};
