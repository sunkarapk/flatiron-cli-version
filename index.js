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

  cliVersion.route = options.route || false;

  if (!app.cli) {
    app.cli = {};
  }
  app.cli.version = true;

  var data = { exports: {} };
  require('pkginfo')(data, { include: ['name', 'version'].concat(options.keys || []), dir: options.dir || __dirname });

  if (!app.name) {
    app.name = data.exports.name;
  }

  app.version = data.exports.version;
};

cliVersion.init = function (done) {
  var app = this;

  if (!app.plugins.cli) {
    throw new Error('`cli` plugin is required to use `flatiron-cli-version`');
  }

  if (cliVersion.route) {
    app.commands['version'] = function (cb) {
      app.log.info(app.name + ' ' + ('v' + app.version).yellow.bold);
      cb(null);
    };

    app.commands['version'].usage = [
      'Display app version',
      '',
      app.name + ' version'
    ].join("\n");
  }

  done();
};
