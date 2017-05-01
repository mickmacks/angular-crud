angular
  .module('wineApp')
  .controller('WinesIndexController', WinesIndexController);

WinesIndexController.$inject = ['$http'];
function WinesIndexController ($http) {

  console.log('working Index Controller fx');

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