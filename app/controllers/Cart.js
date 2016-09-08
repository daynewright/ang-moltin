'use strict';

app.controller('CartCtrl', function($scope, $route, cart, moltin, $location){
  $scope.cart = cart;

  $scope.delete = (id)=> {
      moltin.Cart.Remove(id, function(){
        console.log('Item deleted from cart');
        $scope.cart = cart;
      }, function(error){
        console.error('This happened: ', error);
      });
  };

  console.log(cart);

  $scope.activeTab = $route.current.$$route.activetab;
});
