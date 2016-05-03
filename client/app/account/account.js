'use strict';

angular.module('mvpApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('logout', {
        url: '/logout?referrer',
        referrer: 'main',
        template: '',
        controller: function($state, Auth) {
          var referrer = $state.params.referrer ||
                          $state.current.referrer ||
                          'main';
          Auth.logout();
          $state.go(referrer);
        }
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupController',
        controllerAs: 'vm'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'vm',
        authenticate: true
      })
      .state('signupArtist', {
        url: '/signupArtist',
        templateUrl: 'app/account/signupArtist/signupArtist.html',
        controller: 'SignupArtistController',
        controllerAs: 'vm',
        authenticate: true
      })
      // .state('signupArtist.tabs', {
      //   templateUrl: 'app/account/signupArtist/signupArtist.tabs.html'
      // })
      .state('signupArtist_1', {
        url: '/signupArtist_1',
        templateUrl: 'app/account/signupArtist/signupArtist.1.html',
        controller: 'SignupArtistController',
        controllerAs: 'vm',
        authenticate: true
      })
      .state('signupArtist_2', {
        url: '/signupArtist_2',
        templateUrl: 'app/account/signupArtist/signupArtist.2.html',
        controller: 'SignupArtistController',
        controllerAs: 'vm',
        authenticate: true
      })
      .state('signupArtist_3', {
        url: '/signupArtist_3',
        templateUrl: 'app/account/signupArtist/signupArtist.3.html',
        controller: 'SignupArtistController',
        controllerAs: 'vm',
        authenticate: true
      })
  })
  .run(function($rootScope) {
    $rootScope.$on('$stateChangeStart', function(event, next, nextParams, current) {
      if (next.name === 'logout' && current && current.name && !current.authenticate) {
        next.referrer = current.name;
      }
    });
  });
