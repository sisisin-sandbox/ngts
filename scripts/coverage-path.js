const path = require('path');

const coverageDir = process.env.CIRCLE_ARTIFACTS ?
  path.resolve(process.env.CIRCLE_ARTIFACTS, 'coverage')
  : 'coverage';
const tempBase = 'coverage/temp';

module.exports = {
  getTempPath() { return path.resolve(tempBase, 'coverage-final.json'); },
  getJsonPath() { return path.resolve(coverageDir, 'json/coverage-final.json'); },
  getHtmlPath() { return path.resolve(coverageDir, 'html'); },
  tempBase
}