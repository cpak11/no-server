angular.module('cndapp').controller('ctrltech', function($scope, servtech){

  servtech.gettech().then(function(response) {
    $scope.sources = response;
  })

});
