'use strict';

app.controller('CartCtrl', function($scope, $route, cart, moltin, $location){

  for(let item in cart.contents){
    cart.contents[item].uid = item;
  }

  $scope.cart = cart;

  $scope.delete = (id, uid)=> {
    moltin.Cart.Remove(id, function(){
      delete cart.contents[uid];
      console.log('deleted', id );
      if(Object.keys(cart.contents).length === 0){
          cart.total_items = 0;
      }
      $scope.cart = cart;
      $scope.$apply();
    }, function(error){
      console.error('This happened: ', error);
    });
  };

  $scope.activeTab = $route.current.$$route.activetab;

});
