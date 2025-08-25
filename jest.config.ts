export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|tsx)$': [
            'ts-jest',
            {
                tsconfig: {
                    jsx: 'react-jsx',
                    esModuleInterop: true,
                },
            },
        ],
    },
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '\\.(gif|ttf|eot|svg|png)$':
            '<rootDir>/src/test/__ mocks __/fileMock.js',
    },
    setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.ts'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
