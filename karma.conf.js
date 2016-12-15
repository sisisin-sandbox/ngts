module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/index.ts',
      'test/**-spec.ts',
      'views/*.html'
    ],
    exclude: [],
    preprocessors: {
      'src/index.ts': ['webpack'],
      'test/**-spec.ts': ['webpack'],
      'views/*.html': ['ng-html2js']
    },
    webpack: {
      entry: {},
      output: {
        filename: './dist/bundle.js'
      },
      resolve: {
        extensions: ['', '.ts', '.js']
      },
      module: {
        loaders: [
          { test: /\.ts$/, loaders: ['webpack-espower-loader', 'ng-annotate-loader', 'ts-loader'] },
          { test: /\.json$/, loader: 'json' }
        ]
      }
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: 'views',
      prependPrefix: '/views',
      moduleName: 'templates'
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
