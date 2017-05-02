angular
  .module('wineApp')
  .controller('winesIndexController', winesIndexController);

winesIndexController.$inject = ['$http'];
function winesIndexController ($http) {
  
  var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/wines'
  }).then(function successCallback(response) {
    vm.wines = response.data.wines;
  }, function errorCallback(error) {
    console.log('There was an error getting the data', error);
  });

}