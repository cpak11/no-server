angular.module('cndapp').controller('ctrlworldnews', function($scope, cndserv){

  cndserv.getworldnews().then(function(response) {
    console.log(response);
    $scope.gwn = response.sources;
  })

});
