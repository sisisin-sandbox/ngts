const gulp = require('gulp');
const {exec} = require('child_process');
const {getTempPath, getJsonPath, getHtmlPath, tempBase} = require('./scripts/coverage-util');

const remapHtml = `remap-istanbul -i ${getTempPath()} -o ${getHtmlPath()} -t html`;
const remapJson = `remap-istanbul -i ${getTempPath()} -o ${getJsonPath()} -t json`;
const removeTemp = `rm -rf ${tempBase}`;

gulp.task('coverage', (done) => {
  exec(`${remapHtml} && ${remapJson} && ${removeTemp}`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    done();
  });
});
