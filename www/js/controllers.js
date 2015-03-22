angular.module('starter')

  .controller('EventCtrl', ['$scope', 'Events', 'Agendas', '$location', '$anchorScroll', '$ionicScrollDelegate', function( $scope, Events, Agendas, $location, $anchorScroll, $ionicScrollDelegate ) {

    // Events.list().success(callback);
    Events.get().success(function (data) {

      $scope.events = data;

      $scope.shown_event = data.filter(function (val) {
        return val._id === "55075690e4b018f3e291f7c1";
      })[0];

    });

    Agendas.list().success(function (data) {
      data = data.map(function(val) {
        var result = val;
        result.timestamp = Date.parse(val.date + " " + val.start_time);
        return result;
      });

      // all agendas, regardless of event
      $scope.all_agendas = data;

      // filter agendas by the selected Event
      $scope.agendas = data.filter(function(val) {
        return (val.event_id === $scope.shown_event._id);
        // return (val.event_id === $scope.shown_event._id);
      });
    });

    // when TED Event is selected, display agendas for that Event
    $scope.toggleEvent = function(event) {
      $scope.shown_event = event;
      $scope.agendas = $scope.all_agendas.filter(function(val) {
        return (val.event_id === $scope.shown_event._id);
      });
    };

    // selects agenda, assigns to shownAgenda. if already selected, it deselects (null)
    $scope.toggleAgenda = function(agenda, agendaId){
      if($scope.isAgendaShown(agenda)){
        $scope.shownAgenda = null;
        $location.hash('');
      } else {
        $scope.shownAgenda = agenda;
        agendaId = $location.hash(agendaId);
        // $anchorScroll(agendaId);
        setTimeout(function() {
          $ionicScrollDelegate.$getByHandle('containerScroll').anchorScroll(agendaId);
          console.log("SCROLLING TO ", agendaId.$$hash);
        }, 0);
      }
    };

    // helper func, assigns 'agenda' to currently-open agenda
    $scope.isAgendaShown = function(agenda){
      return $scope.shownAgenda === agenda;
    };

  }]);