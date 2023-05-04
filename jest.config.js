module.exports = {
  roots: ['<rootDir>/test'],
  moduleNameMapper: {
    '@/test/(.*)': '<rootDir>/test/$1',
    '@/(.*)': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx', 'json'],
  preset: 'ts-jest',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  coverageReporters: ['json-summary', 'text', 'lcov'],
  coverageThreshold: {
    global: {
      statements: 95,
      branches: 95,
      functions: 95,
      lines: 95,
    },
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}'],
};
