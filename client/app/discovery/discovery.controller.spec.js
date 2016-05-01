'use strict';

describe('Component: DiscoveryComponent', function () {

  // load the controller's module
  beforeEach(module('mvpApp'));

  var DiscoveryComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    DiscoveryComponent = $componentController('DiscoveryComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
