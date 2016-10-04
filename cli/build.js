/*jshint node: true*/
'use strict';

const logger = require('winston');

/**
 * Executes the build command.
 * @name build
 */
const build = (argv, skyPagesConfig, webpack) => {
  const buildConfig = require('../config/webpack/build.webpack.config');
  const config = buildConfig.getWebpackConfig(skyPagesConfig);
  const compiler = webpack(config);

  compiler.run((err, stats) => {

    /* istanbul ignore else */
    if (err) {
      logger.error(err);
      return;
    }

    const jsonStats = stats.toJson();

    /* istanbul ignore else */
    if (jsonStats.errors.length) {
      logger.error(jsonStats.errors);
    }

    /* istanbul ignore else */
    if (jsonStats.warnings.length) {
      logger.warn(jsonStats.warnings);
    }

    logger.info(stats.toString({
      chunks: false,
      colors: false
    }));
  });
};

module.exports = build;
