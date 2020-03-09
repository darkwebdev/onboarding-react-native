module.exports = {
  "preset": "react-native",
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
  },
  "testRegex": "(/__tests__/.*(spec))\\.(tsx?)$",
  "globals": {
    "ts-jest": {
      "diagnostics": false
    }
  },
  "modulePaths": [
    "<rootDir>/components"
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "json"
  ]
};
