angular.module('starter')

.controller('EventsCtrl', ['$scope', 'Events', function($scope, Events  ) {
  $scope.events = undefined;  
  $scope.name = "Sarah";

  var callback = function (result) {
    $scope.events = result.data;
    console.log($scope.events);
  };

  Events.list().then(callback);


}])

.controller('AgendaCtrl', function($scope, $stateParams, Events) {
  $scope.event = Events.get($stateParams.eventId);
});