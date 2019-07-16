// Karma configuration
// Generated on Fri Jan 11 2019 12:23:51 GMT+1100 (AEDT)

module.exports = function(config) {
  config.set({
      frameworks: ["jasmine", "karma-typescript"],
      files: [
          "src/base.spec.ts",
          "src/**/*.ts" // Don't include main.ts, it conflicts with the test bootstrap in base.spec.ts
        ],
      preprocessors: {
          "src/**/*.ts": "karma-typescript" // *.tsx for React Jsx
      },

      karmaTypescriptConfig: {
        bundlerOptions: {
          transforms: [
              require("karma-typescript-es6-transform")()
          ]
      },
        compilerOptions: {
            lib: ["es6", "dom"],
            target: "es5",
            sourceMap: true
        },
        coverageOptions: {
            exclude: [/\.(d|test)\.ts$/i, /.*node_modules.*/]
        },
      },

      reporters: ["progress", "karma-typescript"],
      browsers: ["Chrome"]
  });
}
