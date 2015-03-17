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

