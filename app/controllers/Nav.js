'use strict';

app.controller('NavCtrl', function(MoltinAuth, $scope){

  MoltinAuth.getCart()
  .then((cart)=> $scope.cart = cart);

  $scope.$watch('cart', function(){
    console.log('cart changed');
  });

});
