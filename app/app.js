console.log('Working App JS!');

angular
  .module('wineApp', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../views/wines.html',
      controller: 'winesIndexController',
      controllerAs: 'winesIndexCtrl'
    })
    .when('/wines/:_id', {
      templateUrl: '../views/wine.html',
      controller: 'wineShowController',
      controllerAs: 'wineShowCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}