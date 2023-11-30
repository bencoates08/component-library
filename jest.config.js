module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/stories/",
    "^.*.stories.tsx?$",
  ],
  // A list of paths to directories that Jest should use to search for files in
  roots: ["src"],
  testEnvironment: "jsdom",
  // Indicates whether each individual test should be reported during the run
  verbose: true,
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
};
