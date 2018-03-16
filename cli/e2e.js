/*jslint node: true */
'use strict';

const { start } = require('./utils/start-e2e');

function e2e(command, argv, skyPagesConfig, webpack) {
  start(command, argv, skyPagesConfig, webpack);
}

module.exports = e2e;
