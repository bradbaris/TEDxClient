angular.module('starter')


.controller('EventsCtrl', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http, Events  ) {
  $scope.events = undefined;  //Events.list();

  $http.get('https://floating-woodland-2582.herokuapp.com/api/events')
    .then(function(result) {
      // console.log(result);
      $scope.events = result.data;
    });


  $scope.name = "Sarah";
  // $scope.remove = function(event) {
  //   Events.remove(event);
  // };

  globaltest = $scope.events;

//  console.log($scope.events);
}])

.controller('AgendaCtrl', function($scope, $stateParams, Events) {
  $scope.event = Events.get($stateParams.eventId);
});