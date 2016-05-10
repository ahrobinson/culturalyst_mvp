'use strict';

describe('Service: MediaList', function () {

  // load the service's module
  beforeEach(module('mvpApp.MediaList'));

  // instantiate service
  var MediaList;
  beforeEach(inject(function (_MediaList_) {
    MediaList = _MediaList_;
  }));

  it('should do something', function () {
    !!MediaList.should.be.true;
  });

});
