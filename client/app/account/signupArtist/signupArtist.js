'use strict';

angular.module('mvpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('signupArtist', {
        url: '/signupArtist',
        template: '<signup-artist></signup-artist>'
      });
  });
