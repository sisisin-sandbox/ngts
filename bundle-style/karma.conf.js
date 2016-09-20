module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'browserify'],
    files: [
      'dist/bundle.js',
      'test/karma/**-spec.ts',
      'views/*.html'
    ],
    exclude: [
    ],
    preprocessors: {
      'test/karma/**-spec.ts': ['browserify'],
      'views/*.html': ['ng-html2js']      
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: 'views',
      prependPrefix: '/views',
      moduleName: 'templates'
    },
    browserify:{
      debug: true,
      plugin: ['tsify'],
      transform: ['espowerify'],
      extensions: ['.ts', '.js']
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
