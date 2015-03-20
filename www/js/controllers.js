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

    $scope.agendas = data.filter(function(val) {
      return (val.event_id === $scope.shown_event._id);
    });
    // console.log("agendas ", $scope.agendas);
  });

  // $scope.infobox = false;
  //   $scope.toggleInfobox = function() {
  //   $scope.infobox = $scope.infobox === false ? true: false;
  // };

  //  $scope.agendas = []; 
  //  for(var i=0; i<2; i++){ 
  //   // test index =8, use length later
  //   $scope.agendas[i] = {
  //     items: ['data'] //GET method to populate data
  //   }; 
  //  } 

// conditional if a given agenda is the selected agenda, deselect it, else, select the given agenda
  $scope.toggleAgenda = function(agenda){
    if($scope.isAgendaShown(agenda)){
      $scope.shownAgenda = null;
    } else {
      $scope.shownAgenda = agenda;
    }
  };
  
  $scope.toggleEvent = function(event) {
    // if($scope.isEventShown(agenda)){
    //   $scope.shownAgenda = null;
    // } else {
    //   $scope.shownAgenda = agenda;
    // }
    // console.log($scope.shown_event);

    // if($scope.isAgendaShown(event)){
    //   $scope.shownAgenda = null;
    // } else {
    //   $scope.shownAgenda = event;
    // }


    $scope.shown_event = event;
    // console.log($scope.shown_event);

    $scope.agendas = $scope.all_agendas.filter(function(val) {
      return (val.event_id === $scope.shown_event._id);
    });

    // console.log($scope.agendas);

  };

  $scope.isAgendaShown = function(agenda){
    return $scope.shownAgenda === agenda;
  };

}])

// creating an application with angular with ionic module

.controller('MapCtrl', function($scope, $stateParams, Events) {

  //put fullscreen map stuffs?

});

