module.exports = {
  setupFilesAfterEnv: ['<rootDir>/testSetup.js'],
  moduleNameMapper: {
    '~(.*)$': '<rootDir>/src/$1'
  }
};
