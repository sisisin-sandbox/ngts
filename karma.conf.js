const {tempBase} = require('./scripts/coverage-util');

const otherFiles = [
  'node_modules/angular/angular.js',
  'node_modules/angular-mocks/angular-mocks.js',
  'views/*.html'
];
const sourceFiles = process.argv[4] === 'cov' ?
  ['.tmp/src/index.js', '.tmp/test/**-spec.js']
  : ['src/index.ts', 'test/**-spec.ts'];

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'source-map-support'],
    files: [...otherFiles, ...sourceFiles],
    exclude: [],
    preprocessors: {
      'src/index.ts': ['webpack'],
      'test/**-spec.ts': ['webpack'],
      '.tmp/src/index.js': ['webpack'],
      '.tmp/test/**-spec.js': ['webpack'],
      'views/*.html': ['ng-html2js']
    },
    webpack: {
      entry: {},
      devtool: 'inline-source-map',
      output: { filename: './dist/bundle.js' },
      resolve: { extensions: ['', '.ts', '.js'] },
      module: {
        loaders: [
          { test: /\.ts$/, loaders: ['webpack-espower-loader', 'ng-annotate-loader', 'ts-loader'] },
          { test: /\.json$/, loader: 'json' }
        ],
        postLoaders: [{ test: /\.js$/, loader: 'istanbul-instrumenter', exclude: [/node_modules/, /-spec\.js$/] }]
      }
    },
    webpackMiddleware:{
      stats: 'errors-only',
      noInfo: true
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: 'views',
      prependPrefix: '/views',
      moduleName: 'templates'
    },
    reporters: ['mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,
    coverageReporter: { type: 'json', dir: tempBase, subdir: '.' }
  });
}
