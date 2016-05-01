'use strict';

describe('Component: ArtistComponent', function () {

  // load the controller's module
  beforeEach(module('mvpApp'));

  var ArtistComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ArtistComponent = $componentController('ArtistComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
