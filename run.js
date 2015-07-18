'use strict';

// Load local environment variables (Uncomment this when doing development locally).
//require('dotenv').load();

var shell = require('shelljs');
var settings = require('./settings');

// Generate settings.json file.
shell.echo(JSON.stringify(settings)).to('settings.json');

// Copy settings.json file to root directory of etherpad.
shell.mv('-f', 'settings.json', './codeaux-etherpad/');

// Execute etherpad server.
if (shell.exec('bash ./codeaux-etherpad/bin/run.sh').code !== 0) {
  shell.echo('Error: codeaux-etherpad not found');
  shell.exit(1);
}
