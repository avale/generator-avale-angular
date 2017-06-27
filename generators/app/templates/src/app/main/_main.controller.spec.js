(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('<%- appName %>'));
    beforeEach(inject(function(_$controller_) {

      vm = _$controller_('MainController');
    }));

    it('should ...', function() {
      expect(vm.creationDate).toEqual(jasmine.any(Number));
    });
  });
})();
