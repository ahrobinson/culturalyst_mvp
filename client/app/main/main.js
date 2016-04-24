'use strict';

angular.module('mvpApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>'
      })
      .state('main.info', {
      	url: '/bottom-sheet.html',
      	templateUrl: 'app/main/bottom-sheet.html'
      })
  });
