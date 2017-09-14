angular.module('cndapp').service('cndserv', function($http){

  this.getworldnews = function() {
    return $http({
      method: "GET",
      url: 'https://newsapi.org/v1/sources?category=general&country=us',
    }).then(function(response) {
      return response.data;
    })
  };


  this.getbusiness = function() {
    return $http({
      method: "GET",
      url: 'https://newsapi.org/v1/articles?source=business-insider&sortBy=top&apiKey=718f3f327c5348bb8c698f3e95eab7a6',
    }).then(function(response) {
      return response.data;
    })
  };



})
