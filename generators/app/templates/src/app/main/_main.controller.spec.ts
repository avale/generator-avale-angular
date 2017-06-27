import { MainController } from './main.controller';

describe('controllers', () => {
  let mainController: MainController;

  beforeEach(angular.mock.module('<%- appName %>'));

  beforeEach(inject(($controller: angular.IControllerService) => {
    mainController = $controller('MainController');
  }));

  it('should ...', () => {
    expect(mainController.creationDate > 0).toBeTruthy();
  });
});
