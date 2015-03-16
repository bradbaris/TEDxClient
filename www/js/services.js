angular.module('starter')

.service('Events', ['$http', function ($http) {

  this.list = function () {

    return $http.get('https://floating-woodland-2582.herokuapp.com/api/events');

  };

}]);
