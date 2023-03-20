module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/src/*.[jt]s?(x)'],
    transform: {
        '^.+\\.tsx?$': ['@swc/jest'],
    },
};
