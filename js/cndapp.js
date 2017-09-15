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
  .state('tech', {
    url: '/tech',
    templateUrl: '/views/tech.html',
    controller: 'ctrltech'
  })
  .state('sports', {
    url: '/sports',
    templateUrl: '/views/sports.html',
    controller: 'ctrlsports'
  })
  .state('entertainment', {
    url: '/entertainment',
    templateUrl: '/views/entertainment.html',
    controller: 'ctrlentertainment'
  })

});
