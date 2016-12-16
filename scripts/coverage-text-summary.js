const {Report, Collector, utils} = require('istanbul');
const {getJsonPath} = require('./coverage-path');

// istanbulのtext-summary.jsをまるっと持ってきた
function lineForKey(summary, key, watermarks) {
  var metrics = summary[key],
    skipped,
    result;
  key = key.substring(0, 1).toUpperCase() + key.substring(1);
  if (key.length < 12) { key += '                   '.substring(0, 12 - key.length); }
  result = [key, ':', metrics.pct + '%', '(', metrics.covered + '/' + metrics.total, ')'].join(' ');
  skipped = metrics.skipped;
  if (skipped > 0) {
    result += ', ' + skipped + ' ignored';
  }
  return result;
}

function writeReport() {
  const collector = new Collector();
  collector.add(require(getJsonPath()));
  const summaries = collector.files().map(f => utils.summarizeFileCoverage(collector.fileCoverageFor(f)));
  const finalSummary = utils.mergeSummaryObjects.apply(null, summaries);

  let lines = [];
  lines.push('');
  lines.push('```');
  lines.push('=============================== Coverage summary ===============================');
  lines.push.apply(lines, [
    lineForKey(finalSummary, 'statements'),
    lineForKey(finalSummary, 'branches'),
    lineForKey(finalSummary, 'functions'),
    lineForKey(finalSummary, 'lines')
  ]);
  lines.push('================================================================================');
  lines.push('```');

  console.log(lines.join('\\n'));
}

function printSummary() {
  writeReport();
  process.exit(0);
}

printSummary();
