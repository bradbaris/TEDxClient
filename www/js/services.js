angular.module('starter')

.service('Events', ['$http', function ($http) {

  this.list = function () {
    return $http.get('http://tedx-api.devleague.com/api/events');
  };

  this.get = function (id) {
    return $http.get('http://tedx-api.devleague.com/api/events');
  };

}])

.service('Agendas', ['$http', function ($http) {
  this.list = function () {
    return $http.get('http://tedx-api.devleague.com/api/agendas');
  };
}]);

