'use strict';

class SignupArtistController {
  constructor(Auth) {
    this.errors = {};
    this.Auth = Auth;
  }

}

angular.module('mvpApp')
  .controller('SignupArtistController', SignupArtistController);
