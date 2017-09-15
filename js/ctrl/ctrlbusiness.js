angular.module('cndapp').controller('ctrlbusiness', function($scope, servbusiness){

  servbusiness.getbusiness().then(function(response) {
    $scope.sources = response;
  })

});
