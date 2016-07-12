'use strict';

angular.module('mvpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('discovery', {
        url: '/discovery',
        template: '<discovery></discovery>',
      });
  });
