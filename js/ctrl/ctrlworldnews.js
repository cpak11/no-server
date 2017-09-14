angular.module('cndapp').controller('ctrlworldnews', function($scope, cndserv){

  cndserv.getworldnews().then(function(response) {
    $scope.sources = response;
  })

});
