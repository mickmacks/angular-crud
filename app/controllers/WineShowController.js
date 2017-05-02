angular
  .module('wineApp')
  .controller('wineShowController', wineShowController);

wineShowController.$inject=['$http', '$routeParams', '$location'];
function wineShowController($http, $routeParams, $location) {

  console.log('hello')

  var vm = this;
  var wineId = $routeParams.id;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/wines/'+wineId
  }).then(onWineShowSuccess, onError);

  function onWineShowSuccess(response){
    console.log('here\'s the data for Wine', wineId, ':', response.data);
    vm.wine = response.data;
  }

  function onError(error){
    console.log('there was an error: ', error);
  }

  vm.updatewine = function(edittedWine) {
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/wines/' + edittedWine._id,
      data: {
        name : edittedWine.name,
        country : edittedWine.country,
        year : edittedWine.year,
        description : edittedWine.description,
        price: edittedWine.price
      }
    }).then(onWineUpdateSuccess, onError);

    function onWineUpdateSuccess(response){
      vm.wine = response.data;
      $location.path('/');
    }
  };

  vm.deletewine = function(deletedWine) {

    console.log('delete clicked');

    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/wines/' + deletedWine._id,
    }).then(onWineDeleteSuccess, onError);

    function onWineDeleteSuccess(response){
      $location.path('/');
    }
  };

}