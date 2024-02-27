const gulp = require("gulp");

require("./gulp/dev.js");
require("./gulp/dist.js");

gulp.task(
  "default",
  gulp.series(
    "clean:dev",
    gulp.parallel(
      "html:dev",
      "sass:dev",
      "images:dev",
      "fonts:dev",
      "files:dev",
      "js:dev"
    ),
    gulp.parallel("server:dev", "watch:dev")
  )
);

gulp.task(
  "build",
  gulp.series(
    "clean:dist",
    gulp.parallel(
      "html:dist",
      "sass:dist",
      "images:dist",
      "fonts:dist",
      "files:dist",
      "js:dist"
    )
  )
);
