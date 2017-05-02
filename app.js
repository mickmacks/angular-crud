console.log('Working App JS!');

angular
  .module('wineApp', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../views/wines.html',
      controllerAs: 'winesIndexCtrl',
      controller: 'winesIndexController'
    })
    .when('/wines/:_id', {
      templateUrl: '../views/wine.html',
      controller: 'wineShowCtrl',
      controllerAs: 'wineShowController'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}