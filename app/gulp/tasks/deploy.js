var gulp = require('gulp');
var ghpages = require('gh-pages');
var path = require('path');


// deploy the dist folder to gh-pages
gulp.task("deploy", function(cb) {
  ghpages.publish(path.join(process.cwd(), "../build"), cb);
});	