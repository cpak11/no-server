angular.module('cndapp').controller('ctrlworldnews', function($scope, servworldnews){

  servworldnews.getworldnews().then(function(response) {
    $scope.sources = response;
  })

});
