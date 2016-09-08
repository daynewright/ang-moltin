'use strict';

app.controller('AllEventsCtrl', function($scope, $route, events){
  $scope.events = events;
  console.log(events);

  $scope.$route = $route;
});
