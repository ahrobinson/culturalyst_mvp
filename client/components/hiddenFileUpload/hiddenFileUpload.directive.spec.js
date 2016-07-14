'use strict';

describe('Directive: hiddenFileUpload', function () {

  // load the directive's module and view
  beforeEach(module('mvpApp.hiddenFileUpload'));
  beforeEach(module('components/hiddenFileUpload/hiddenFileUpload.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<hidden-file-upload></hidden-file-upload>');
    element = $compile(element)(scope);
    scope.$apply();
    element.text().should.equal('this is the hiddenFileUpload directive');
  }));
});
