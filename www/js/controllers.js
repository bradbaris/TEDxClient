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

  $scope.infobox = false;
  $scope.toggleInfobox = function() {
    $scope.infobox = $scope.infobox === false ? true: false;
  };

}])


// creating an application with angular with ionic module


// define AgendaCtrl to make initialize ng-repeat
// this will generate the agenda list and where data will be rendered
.controller('AgendaCtrl', function($scope) {
   $scope.agendas = []; 
   for(var i=0; i<8; i++){ 
    // test index =8, use length later
    $scope.agendas[i] = {
      items: ['data'] //GET method to populate data
    }; 
   } 


// conditional if a given agenda is the selected agenda, deselect it, else, select the given agenda
  $scope.toggleAgenda = function(agenda){
    if($scope.isAgendaShown(agenda)){
      $scope.shownAgenda = null;
    } else {
      $scope.shownAgenda = agenda;
    }
  };
  
  $scope.isAgendaShown = function(agenda){
    return $scope.shownAgenda === agenda;
  };

})

.controller('MapCtrl', function($scope, $stateParams, Events) {

  //put fullscreen map stuffs?

});

