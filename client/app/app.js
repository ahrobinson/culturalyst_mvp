'use strict';

angular.module('mvpApp', [
  'mvpApp.auth',
  'mvpApp.admin',
  'mvpApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'validation.match',
  'ngAnimate',
  'ngMaterial'
])
  .config(function($urlRouterProvider, $locationProvider, $mdThemingProvider, $mdIconProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

     $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu" , "./assets/svg/menu.svg", 24)
      .icon("search" , "./assets/svg/search.svg", 24)
      .icon("search_black", "./assets/svg/search_black.svg", 24)
      .icon("back_arrow", "./assets/svg/back_arrow.svg", 24)

    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey', {
        'default': '50',
        'hue-1': '50'
      })
      .accentPalette('orange');
  });
