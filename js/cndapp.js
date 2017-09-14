angular.module('cndapp', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('worldnews', {
    url: '/world-news',
    templateUrl: '/views/worldnews.html',
    controller: 'ctrlworldnews'
  })
  .state('business', {
    url: '/business',
    templateUrl: '/views/business.html',
    controller: 'ctrlbusiness'
  })

});
