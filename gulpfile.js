const gulp = require('gulp');
const {exec} = require('child_process');
const path = require('path');


gulp.task('coverage', (done) => {
  const coverageDir = process.env.CIRCLE_ARTIFACTS ?
    path.resolve(process.env.CIRCLE_ARTIFACTS, 'coverage')
    : 'coverage/';
  const remapHtml = `remap-istanbul -i ./coverage/temp/coverage-final.json -o ${path.resolve(coverageDir, 'html')} -t html`;
  const remapJson = `remap-istanbul -i ./coverage/temp/coverage-final.json -o ${path.resolve(coverageDir, 'json/coverage-final.json')} -t json`;

  exec(`${remapHtml} && ${remapJson}`, (err, stdout, stderr) => {
    if (err) console.log(err);
    console.log(stdout, stderr);
    done();
  });
});
