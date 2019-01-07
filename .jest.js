module.exports = {
    verbose: true,
    setupFiles: [
        './test/setup.js',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
    ],
    testRegex: '.*\\.test\\.js$',
    collectCoverage: false,
    collectCoverageFrom: [
        'src/components/**/*.{js}',
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/fileMock.js",
        "\\.(css|less|scss)$": "<rootDir>/test/__mocks__/styleMock.js",
        "^APP_ACTION(.*)$": "<rootDir>/src/app/action$1",
        "^APP_STYLES(.*)$": "<rootDir>/src/app/styles$1",
        "^APP_SERVICE(.*)$": "<rootDir>/src/app/service$1",
        "^APP_UTILS(.*)$": "<rootDir>/src/app/utils$1",
    },
    transform: {
        "^.+\\.js$": "babel-jest"
    },
};