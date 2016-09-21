module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'browserify'],
    files: [
      'node_modules/angular/angular.js',
      'dist/bundle.js',
      'test/**-spec.ts',
      'views/*.html'
    ],
    exclude: [
    ],
    preprocessors: {
      'test/**-spec.ts': ['browserify'],
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
