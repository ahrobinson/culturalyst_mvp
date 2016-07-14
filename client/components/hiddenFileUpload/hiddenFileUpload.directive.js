'use strict';

angular.module('mvpApp')
  .directive('hiddenFileUpload', function () {
    return {
      template: '<input type="file" class="hiddenFileInput">',
      restrict: 'E',
      link: function(scope, element, attrs) {
        element.bind('click', function(e) {
          e.preventDefault();
        });
      }
    };
  });
