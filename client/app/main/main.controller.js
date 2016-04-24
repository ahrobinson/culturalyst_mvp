'use strict';

// (function() {

// class MainController {

//   constructor($http, $scope, socket) {
//     this.$http = $http;
//     this.socket = socket;
//     this.awesomeThings = [];

//     // TODO:Setup API call to get hero photographer + hero artist name
//     $scope.photographer = 'Photographer: Alex Glustrom';
//     $scope.artist = 'Musician: Andrew Wiseman';

//     $scope.$on('$destroy', function() {
//       socket.unsyncUpdates('thing');
//     });
//   }

//   $onInit() {
//     this.$http.get('/api/things').then(response => {
//       this.awesomeThings = response.data;
//       this.socket.syncUpdates('thing', this.awesomeThings);
//     });
//   }

//   addThing() {
//     if (this.newThing) {
//       this.$http.post('/api/things', { name: this.newThing });
//       this.newThing = '';
//     }
//   }

//   deleteThing(thing) {
//     this.$http.delete('/api/things/' + thing._id);
//   }
// }

// angular.module('mvpApp')
//   .component('main', {
//     templateUrl: 'app/main/main.html',
//     controller: MainController
//   });

// })();

var app = angular.module('mvpApp')


app.controller('MainController', ['$scope','Auth', '$mdBottomSheet',
  function($scope, Auth, $mdBottomSheet) {

  // $scope.openLeftMenu = function() {
  //   $mdSidenav('left').toggle();
  // };

  // $scope.closeLeftMenu = function(){
  //   $mdSidenav('left').close();
  // }

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

  // $scope.openBottomSheet = function() {
  //   $scope.alert = '';
  //   $mdBottomSheet.show({
  //         templateUrl   : './app/main/bottom-sheet/bottom-sheet.html',
  //         controller: 'BottomSheetController',
  //         parent        : angular.element(document.getElementById('content')),
  //         clickOutsideToClose: true   
  //   }).then(function(){
  //     console.log('yes!');
  //   });
  // };

  $scope.alert = '';
  var listTemplate = ' <md-bottom-sheet class="md-list md-has-header">\
  <md-subheader>Comment Actions</md-subheader>\
  <md-list>\
    <md-item ng-repeat="item in items">\
      <md-button aria-label="{{item.name}}" ng-click="listItemClick($index)">\
        <!-- Using custom inline icon until md-icon is ready. DONT USE ME! -->\
        <md-inline-list-icon icon="{{item.icon}}"></md-inline-list-icon>\
        <span class="md-inline-list-icon-label">{{ item.name }}</span>\
      </md-button>\
    </md-item>\
  </md-list>\
</md-bottom-sheet>'

  $scope.openBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      template: listTemplate,
      controller: 'ListBottomSheetCtrl',
      parent        : angular.element(document.getElementById('content')),
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });
  };

}])

// app.controller('BottomSheetController', function($scope, $mdBottomSheet) {
//   $scope.test = 'Hi'
//   $scope.listItemClick = function($index) {
//     var clickedItem = $scope.items[$index];
//     $mdBottomSheet.hide(clickedItem);
//   };
// })

app.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Share', icon: 'share' },
    { name: 'Upload', icon: 'upload' },
    { name: 'Copy', icon: 'copy' },
    { name: 'Print this page', icon: 'print' },
  ];
})

app.component('main',{
  templateUrl:'app/main/main.html',
  controller: 'MainController'
})