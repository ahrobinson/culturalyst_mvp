'use strict';

// class NavbarController {
//   //start-non-standard
//   menu = [{
//     'title': 'Home',
//     'state': 'main'
//   }];

//   isCollapsed = true;
//   //end-non-standard

//   openLeftMenu($mdSidenav){
//     //$mdSidenav('left').toggle();
//     console.log($mdSidenav)
//   }


//   constructor(Auth) {
//     this.isLoggedIn = Auth.isLoggedIn;
//     this.isAdmin = Auth.isAdmin;
//     this.getCurrentUser = Auth.getCurrentUser;
//   }
// }

// angular.module('mvpApp')
//   .controller('NavbarController', NavbarController);

var app = angular.module('mvpApp');
app.controller('NavbarController', ['$scope', '$mdSidenav', 'Auth',
  function($scope, $mdSidenav, Auth) {

  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };

  $scope.closeLeftMenu = function(){
    $mdSidenav('left').close();
  }

  $scope.isLoggedIn = function(){
    return Auth.isLoggedIn();
  }

  $scope.getCurrentUser = function(){
    return Auth.getCurrentUser();
    console.log('current user', Auth.getCurrentUser());
  }

  $scope.print = function(){
    console.log('print');
  }

  $scope.isArtist = function(){
    return Auth.isArtist();
  }

  $scope.go = function($state){
    console.log('fuck you');
  }



// TO ADD TO NAVBAR
  // $scope.menu = [{
  //   'title': 'Test',
  //   'state': 'test'
  // }, 
  // ];

}]);
