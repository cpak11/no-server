angular.module('cndapp').controller('ctrlentertainment', function($scope, serventertainment){

  serventertainment.getentertainment().then(function(response) {
    $scope.sources = response;
  })

});
