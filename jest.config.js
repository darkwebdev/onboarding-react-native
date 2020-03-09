module.exports = {
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
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
