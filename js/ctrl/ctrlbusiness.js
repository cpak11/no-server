angular.module('cndapp').controller('ctrlbusiness', function($scope, cndserv){

  cndserv.getbusiness().then(function(response) {
    console.log(response);
    $scope.gb = response.articles;
  })

});
