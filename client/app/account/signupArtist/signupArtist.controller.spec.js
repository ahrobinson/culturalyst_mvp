'use strict';

describe('Component: SignupArtistComponent', function () {

  // load the controller's module
  beforeEach(module('mvpApp'));

  var SignupArtistComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    SignupArtistComponent = $componentController('SignupArtistComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
