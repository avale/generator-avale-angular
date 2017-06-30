'use strict';

module.exports = function (AvaleAngularGenerator) {

  /**
   * Add files of the navbar and the main view depending on the ui framework
   * and the css preprocessor
   */
  AvaleAngularGenerator.prototype.uiFiles = function uiFiles() {
    if (this.props.router.module !== null) {
      this.files.push({
        src: 'src/app/main/__' + this.props.ui.key + '.html',
        dest: 'src/app/main/main.html',
        template: true
      });
    }

    this.files.push({
      src: 'src/app/_' + this.props.ui.key + '/__' + this.props.ui.key + '-app.' + this.props.cssPreprocessor.extension,
      dest: 'src/app/app.' + this.props.cssPreprocessor.extension,
      template: true
    });
  };

};
