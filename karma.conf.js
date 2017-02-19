var files = 'test/spec.js';
module.exports = function (config) {
  var option = {
    // base path used to resolve all patterns
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],
    plugins: [
      require("karma-chai"),
      require("karma-chrome-launcher"),
      require("karma-mocha"),
      require("karma-mocha-reporter"),
      require("karma-sourcemap-loader"),
      require("karma-coverage"),
      require("karma-webpack")
    ],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {test: /\.js/, exclude: [/node_modules/], loader: 'babel-loader'}
        ]
      }
    },

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'text-summary'},
        {type: 'html', subdir: 'report-html'},
        {type: 'lcov', subdir: 'report-lcov'}
      ]
    },

    webpackServer: {},

    reporters: ['mocha', 'coverage'],

    // web server port
    port: 9876,

    // enable colors in the output
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // toggle whether to watch files and rerun tests upon incurring changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // if true, Karma runs tests once and exits
    singleRun: true
  };

  option.files = [
    {
      pattern: files, watched: false
    }
  ];
  option.preprocessors = {};
  option.preprocessors[files] = ['webpack', 'sourcemap'];
  config.set(option);
};
