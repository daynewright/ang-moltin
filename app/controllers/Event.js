'use strict';

app.controller('EventsCtrl', function($scope, $route, eventPics, eventName){
$scope.eventPics = eventPics;
$scope.eventName = eventName;

  $scope.$route = $route;
});
