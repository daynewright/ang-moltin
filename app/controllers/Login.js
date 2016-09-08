'use strict';

app.controller('LoginCtrl', function($scope, $route){
  $scope.activeTab = $route.current.activetab;
});
