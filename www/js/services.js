angular.module('starter')

.service('Events', ['$http', function ($http) {

  this.list = function () {
    var result;
    $http.get('https://floating-woodland-2582.herokuapp.com/api/events')
      .then(function(result) {
        console.log(result);
        return result;
      });
   console.log(result);
   //return result;
  };

}]);
