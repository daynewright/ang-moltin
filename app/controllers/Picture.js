'use strict';

app.controller('PictureCtrl', function($scope, $route, picture, moltin, $timeout){
  $scope.picture = picture;
  console.log(picture);
  $scope.addStatus = null;

  $scope.addCart = ()=> {
    $scope.addStatus = 'Adding to cart...';
    moltin.Cart.Insert(picture.id,1, null, function(){
      $scope.addStatus = 'Success!';
      $scope.$apply();
      $timeout(()=> {
          $scope.addStatus= null;
      }, 1000);
    });
  };

  $scope.$route = $route;
});
