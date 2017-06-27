module.exports = function(config) {
  var testWebpackConfig = require('./config/webpack.test.js');

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    exclude: [],
    files: [
      {pattern: './config/karma.js', watched: false},
    ],
    preprocessors: {
      './config/karma.js': ['coverage', 'webpack', 'sourcemap'],
    },
    webpack: testWebpackConfig,
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'text-summary'},
        {type: 'json'},
        {type: 'html'}
      ]
    },
    webpackServer: { noInfo: true },
    reporters: ['mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    failOnEmptyTestSuite: false,
  });
};
