'use strict';

angular.module('mvpApp')
  .directive('hiddenFileUpload', function () {
    return {
      template: '<input type="file" class="hiddenFileInput cantClick">',
      restrict: 'E',
      link: function(scope, element, attrs) {
        element.bind('click', function(e) {
          if (element[0].children[0].className.indexOf('cantClick') > -1) {
            e.preventDefault();
          }
        });
      }
    };
  });
