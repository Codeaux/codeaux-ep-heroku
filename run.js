'use strict';

var shell = require('shelljs');

shell.cp('settings.json', './codeaux-etherpad/settings.json');

if (shell.exec('bash ./codeaux-etherpad/bin/run.sh').code !== 0) {
  shell.echo('Error: codeaux-etherpad not found');
  shell.exit(1);
}
