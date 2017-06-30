'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

var AvaleAngularGenerator = class extends Generator {
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

require('./src/options')(AvaleAngularGenerator);
require('./src/prompts')(AvaleAngularGenerator);
require('./src/paths')(AvaleAngularGenerator);
require('./src/files')(AvaleAngularGenerator);

require('./src/modules')(AvaleAngularGenerator);
require('./src/ui')(AvaleAngularGenerator);
require('./src/router')(AvaleAngularGenerator);
require('./src/preprocessors')(AvaleAngularGenerator);
require('./src/bower')(AvaleAngularGenerator);

require('./src/write')(AvaleAngularGenerator);

module.exports = AvaleAngularGenerator;
