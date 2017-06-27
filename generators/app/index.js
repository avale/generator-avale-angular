'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

var BonAngularGenerator = class extends Generator {
  constructor (args, opts) {
      super(args, opts);

      // Define arguments
      this.argument('appName', {
        type: String,
        required: false
      });

      this.props = {};
  }
};

require('./src/options')(BonAngularGenerator);
require('./src/prompts')(BonAngularGenerator);
require('./src/paths')(BonAngularGenerator);
require('./src/files')(BonAngularGenerator);

require('./src/modules')(BonAngularGenerator);
require('./src/ui')(BonAngularGenerator);
require('./src/router')(BonAngularGenerator);
require('./src/preprocessors')(BonAngularGenerator);
require('./src/bower')(BonAngularGenerator);

require('./src/write')(BonAngularGenerator);

module.exports = BonAngularGenerator;
