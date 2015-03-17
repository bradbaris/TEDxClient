angular.module('starter')

.controller('EventCtrl', ['$scope', 'Events', 'Agendas', function( $scope, Events, Agendas ) {


  // Events.list().success(callback);
  Events.get("55075690e4b018f3e291f7c1").success(function (data) {
    $scope.event = data;
    console.log($scope.event);
  });

  Agendas.list().success(function (data) {
    $scope.agendas = data;
    console.log($scope.agendas);
  });

}])

.controller('AgendaCtrl', function($scope, $stateParams, Events) {
  $scope.event = Events.get($stateParams.eventId);
})

.controller('MapCtrl', function($scope, $stateParams, Events) {

  //put fullscreen map stuffs?

});