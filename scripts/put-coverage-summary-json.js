const fs = require('fs');
const exec = require('child_process').exec;
const {buildSummary, getSummaryJsonPath} = require('./coverage-util');

const cov = { coverage: buildSummary().statements.pct };
const summaryPath = getSummaryJsonPath();
fs.writeFile(summaryPath, JSON.stringify(cov), (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  exec(`aws s3 cp ${summaryPath} s3://zoi-coverage/`, (err, stdout, stderr) => {
    if(err) {
      console.log(err);
      process.exit(1);
    }
    console.log(stdout, stderr);
  });
});
