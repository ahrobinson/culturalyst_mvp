'use strict';

angular.module('mvpApp.auth', [
  'mvpApp.constants',
  'mvpApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
