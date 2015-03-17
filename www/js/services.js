angular.module('starter')

.service('Events', ['$http', function ($http) {

  this.list = function () {
    return $http.get('https://floating-woodland-2582.herokuapp.com/api/events');
  };

  this.get = function (id) {
    // return $http.get('https://floating-woodland-2582.herokuapp.com/api/events/'+id);
    return $http.get('/fakeevent.json');
  };


}])

.service('Agendas', ['$http', function ($http) {
  this.list = function () {
    return $http.get('https://floating-woodland-2582.herokuapp.com/api/agendas');
  };
}]);