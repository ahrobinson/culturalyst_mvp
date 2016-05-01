'use strict';

angular.module('mvpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('artist', {
        url: '/artist',
        template: '<artist></artist>'
      });
  });
