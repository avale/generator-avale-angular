describe 'controllers', () ->
  vm = undefined

  beforeEach module '<%- appName %>'

  beforeEach inject ($controller) ->
    vm = $controller 'MainController'

  it 'should ...', () ->
    expect(vm.creationDate).toEqual jasmine.any Number
