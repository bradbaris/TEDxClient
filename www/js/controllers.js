angular.module('starter')

.controller('EventCtrl', ['$scope', 'Events', function( $scope, Events ) {
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
})

.controller('MapCtrl', function($scope, $stateParams, Events) {

  //put fullscreen map stuffs?

});