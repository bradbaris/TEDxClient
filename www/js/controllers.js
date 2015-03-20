angular.module('starter')


.controller('EventCtrl', ['$scope', 'Events', 'Agendas', function( $scope, Events, Agendas ) {

  // Events.list().success(callback);
  Events.get().success(function (data) {
    // console.log("Events ", data);
    $scope.events = data;

    $scope.shown_event = data.filter(function (val) {
      return val._id === "55075690e4b018f3e291f7c1";
    })[0];
    // console.log($scope.shown_event);
  });

  Agendas.list().success(function (data) {
    $scope.all_agendas = data;
    // console.log("string", $scope.all_agendas.start_time);
    $scope.agendas = data.filter(function(val) {
      return (val.event_id === $scope.shown_event._id);
    });

    console.log("string", $scope.agendas[1].start_time);
    console.log("moment", moment().hour($scope.agendas[1].start_time));
  });

// conditional if a given agenda is the selected agenda, deselect it, else, select the given agenda
  $scope.toggleAgenda = function(agenda){
    if($scope.isAgendaShown(agenda)){
      $scope.shownAgenda = null;
    } else {
      $scope.shownAgenda = agenda;
    }
  };
  
  $scope.toggleEvent = function(event) {
    $scope.shown_event = event;
    $scope.agendas = $scope.all_agendas.filter(function(val) {
      return (val.event_id === $scope.shown_event._id);
    });

  };

  $scope.isAgendaShown = function(agenda){
    return $scope.shownAgenda === agenda;
  };

}])

// creating an application with angular with ionic module

.controller('MapCtrl', function($scope, $stateParams, Events) {

  //put fullscreen map stuffs?

});

