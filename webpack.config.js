module.exports = {
  entry: './src/index.ts',
  output: {
    filename: './dist/bundle.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['ng-annotate-loader', 'ts-loader'] }
    ]
  }
};
