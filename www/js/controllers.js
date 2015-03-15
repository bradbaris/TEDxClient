angular.module('starter.controllers', [])


.controller('EventsCtrl', function($scope, Events) {
  $scope.chats = Events.all();
  $scope.remove = function(event) {
    Events.remove(event);
  };
})

.controller('AgendaCtrl', function($scope, $stateParams, Events) {
  $scope.event = Events.get($stateParams.eventId);
});