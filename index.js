/*
 * index.js: Top-level include for flatiron-cli-version
 *
 * (C) 2012, Pavan Kumar Sunkara
 *
 */

var path = require('path');

var cliVersion = exports = module.exports;

cliVersion.name = 'cli-version';

cliVersion.attach = function (options) {
  var app = this;
  options = options || {};

  if (!app.plugins.cli) {
    throw new Error('`cli` plugin is required to use `flatiron-cli-version`');
  }

  var data = { exports: {} };
  require('pkginfo')(data, { include: ['name', 'version'], dir: options.dir || __dirname });

  if (!app.name) {
    app.name = data.exports.name;
  }

  app.version = data.exports.version;

  app.commands['version'] = function (cb) {
    app.log.info(app.name + ' ' + ('v' + app.version).yellow.bold);
    cb(null);
  };

  app.commands['version'].usage = [
    'Display app version',
    '',
    app.name + ' version'
  ].join("\n");
};