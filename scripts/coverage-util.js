const path = require('path');
const {Report, Collector, utils} = require('istanbul');


const coverageDir = process.env.CIRCLE_ARTIFACTS ?
  path.resolve(process.env.CIRCLE_ARTIFACTS, 'coverage')
  : 'coverage';
const tempBase = 'coverage/temp';
function getTempPath() { return path.resolve(tempBase, 'coverage-final.json'); }
function getJsonPath() { return path.resolve(coverageDir, 'json/coverage-final.json'); }
function getSummaryJsonPath() { return path.resolve(coverageDir, `json/summary${new Date().getTime()}.json`); }
function getHtmlPath() { return path.resolve(coverageDir, 'html'); }

function buildSummary() {
  const collector = new Collector();
  collector.add(require(getJsonPath()));
  const summaries = collector.files().map(f => utils.summarizeFileCoverage(collector.fileCoverageFor(f)));
  return utils.mergeSummaryObjects.apply(null, summaries);
}

module.exports = {
  buildSummary,
  getTempPath,
  getJsonPath,
  getSummaryJsonPath,
  getHtmlPath,
  tempBase
}
