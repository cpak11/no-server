angular.module('cndapp').service('serventertainment', function($http){
var self = this
  this.getentertainment = function() {
    return $http({
      method: "GET",
      url: 'https://newsapi.org/v1/sources?category=entertainment&country=us',
    }).then(function(response) {
      var promises = [];
      var sources = response.data.sources.splice(0,6)
      sources.forEach(function(source){
        promises.push(self.getentertainmentarticles(source.id))
      })
      return Promise.all(promises).then(function(articleResponse){
        var articles = [];
        articleResponse.forEach(function(cur){
            articles.push(cur.articles)
        })
        return sources.map(function(source, ind){
          source.articles = articles[ind]
          return source
        })
      });
    })
  };

  this.getentertainmentarticles = function(id) {
    return $http({
      method: "GET",
      url: 'https://newsapi.org/v1/articles?source=' + id + '&sortBy=top&apiKey=718f3f327c5348bb8c698f3e95eab7a6',
    }).then(function(response) {
      return response.data;
    })
  };
});
