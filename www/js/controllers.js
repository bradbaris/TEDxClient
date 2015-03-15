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

// creating an application with angular with ionic module


// define AgendaCtrl to make initialize ng-repeat
.controller('AgendaCtrl', function($scope) {
   $scope.agendas = []; 
   for(var i=0; i<5; i++){ 
    // test index =5, use length later
    $scope.agendas[i] = {
      name: i,
      items: ['data']
    }; 
   } 
   console.log("AgendaCtrl");


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

.controller('AgendaCtrl', function($scope, $stateParams, Events) {
  $scope.event = Events.get($stateParams.eventId);
});

