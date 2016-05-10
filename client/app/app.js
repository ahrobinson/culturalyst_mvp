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
  'ngMaterial',
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
      .icon("clear_black", "./assets/svg/clear_black.svg", 24)
      .icon("enter_black", "./assets/svg/enter_black.svg", 24)
      .icon("discover_black", "./assets/svg/discover_black.svg", 24)
      .icon("home_black", "./assets/svg/home_black.svg", 24)
      .icon("dollar_black", "./assets/svg/dollar_black.svg", 24)
      .icon("dollar_white", "./assets/svg/dollar_white.svg", 24)
      .icon("thumb_black", "./assets/svg/thumb_black.svg", 24)
      .icon("add_black", "./assets/svg/add_black.svg", 24)

    var customPrimary = {
        '50': '#ffffff',
        '100': '#ffffff',
        '200': '#ffffff',
        '300': '#ffffff',
        '400': '#fefefe',
        '500': '#f1f1f1',
        '600': '#e4e4e4',
        '700': '#d7d7d7',
        '800': '#cbcbcb',
        '900': '#bebebe',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#b1b1b1'
    };
    $mdThemingProvider
        .definePalette('customPrimary', 
                        customPrimary);


    $mdThemingProvider.theme('default')
      .primaryPalette('customPrimary', {
        'default': '400',
        'hue-1': '500'
      })
      .accentPalette('pink', {
        'default': '500'
      })
  });
