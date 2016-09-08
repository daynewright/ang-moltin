'use strict';

app.controller('CartCtrl', function($scope, $route){
  $scope.activeTab = $route.current.$$route.activetab;
});
