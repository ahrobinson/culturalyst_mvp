'use strict';

angular.module('mvpApp.hiddenFileUpload')
  .directive('hiddenFileUpload', function () {
    return {
      templateUrl: 'components/hiddenFileUpload/hiddenFileUpload.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
