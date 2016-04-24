'use strict';

angular.module('mvpApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>'
      })
      .state('/glance', {
      	url:'/glance'
      	templateUrl: 'app/main/bottom-sheet.html',
      	controller: 'BottomSheetController'
      })
  });
