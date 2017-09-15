angular.module('cndapp').controller('ctrlsports', function($scope, servsports){

  servsports.getsports().then(function(response) {
    $scope.sources = response;
  })

});
