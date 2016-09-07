'use strict';

var app = angular.module('PicApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html',
    controller: 'LoginCtrl',
    activetab: 'login'
  })
  .when('/allevents', {
    templateUrl: 'partials/all-events.html',
    controller: 'AllEventsCtrl',
    activetab: 'allevents',
    //need to resolve promises with 'resolve' video: https://youtu.be/gLa2LxMdAPs?t=8m22s
  })
  .when('/event', {
    templateUrl: 'partials/event.html',
    controller: 'EventsCtrl',
    activetab: 'event'

  })
  .when('/picture', {
    templateUrl: 'partials/picture.html',
    controller: 'PictureCtrl',
    activetab: 'picture'

  })
  .when('/cart', {
    templateUrl: 'partials/cart.html',
    controller: 'CartCtrl',
    activetab: 'cart'
  })
  .otherwise('/', {
    templateUrl: 'partials/login.html',
    controller: 'LoginCtrl',
    activetab: 'login'
  });
});
