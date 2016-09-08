'use strict';

var app = angular.module('PicApp', ['ngRoute', 'PicApp.moltin']);

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
    resolve: {
      events: function($q, MoltinAuth){
        return $q((resolve, reject)=> {
          MoltinAuth.moltinAuth()
          .then((moltin)=> moltin.Category.List(null, (events)=> resolve(events)));
        });
      }
    }
  })
  .when('/event/:id', {
    templateUrl: 'partials/event.html',
    controller: 'EventsCtrl',
    activetab: 'event',
    resolve: {
      eventName: function($q, MoltinAuth, $route){
        return $q((resolve, reject)=> {
          MoltinAuth.moltinAuth()
          .then((moltin)=> moltin.Category.Get($route.current.params.id, (eventName)=> resolve(eventName)));
        });
      },
      eventPics: function($q, MoltinAuth, $route){
        return $q((resolve, reject)=> {
          MoltinAuth.moltinAuth()
          .then((moltin)=> moltin.Product.List({category: $route.current.params.id}, (eventPics)=> resolve(eventPics)));
        });
      }
    }

  })
  .when('/picture/:id', {
    templateUrl: 'partials/picture.html',
    controller: 'PictureCtrl',
    activetab: 'picture',
    resolve: {
      picture: function($q, MoltinAuth, $route){
        return $q((resolve, reject)=> {
          MoltinAuth.moltinAuth()
          .then((moltin)=> moltin.Product.Get($route.current.params.id, (eventName)=> resolve(eventName)));
        });
      },
      moltin: function(MoltinAuth){
        return MoltinAuth.moltinAuth();
      }
    }
  })
  .when('/cart', {
    templateUrl: 'partials/cart.html',
    controller: 'CartCtrl',
    activetab: 'cart',
    resolve: {
      cart: function(MoltinAuth){
        return MoltinAuth.moltinAuth().then((moltin)=> moltin.Cart.Contents());
      },
      moltin: function(MoltinAuth){
        return MoltinAuth.moltinAuth();
      }
    }
  })
  .otherwise('/', {
    templateUrl: 'partials/login.html',
    controller: 'LoginCtrl',
    activetab: 'login'
  });
});
