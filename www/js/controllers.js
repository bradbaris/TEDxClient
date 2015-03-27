angular.module('starter')

  .run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 400;   // always scroll by 140 extra pixels
  }])
  .controller('EventCtrl', ['$scope', 'Events', 'Agendas', '$location', '$anchorScroll', '$ionicScrollDelegate', '$timeout', function( $scope, Events, Agendas, $location, $anchorScroll, $ionicScrollDelegate, $timeout ) {

    // Events.list().success(callback);
    Events.get().success(function (data) {

      $scope.events = data;

      //hardcoded value because app only uses 1 Event for now
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
        $scope.shownAgenda = null; //reset to base doc y-height
        $scope.shownAgenda = agenda;
        $timeout(function() {
          $location.hash(agendaId);
          $ionicScrollDelegate.$getByHandle('containerScroll').anchorScroll();
        }, 20);
      }
    };

    // helper func, assigns 'agenda' to currently-open agenda
    $scope.isAgendaShown = function(agenda){
      console.log($scope.shownAgenda);
      return $scope.shownAgenda === agenda;
    };

    //http://maps.google.com/maps?q=loc:21.298469+-157.818713
    $scope.launchMapUa = function(lat,lng){
      if( (navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPod") != -1) || (navigator.platform.indexOf("iPad") != -1))
        // iphone/ipad/ipod
        window.open("maps://maps.google.com/maps?q=loc:"+lat+"+"+lng);
      else
        // everything else (Android, desktops)
        window.open("http://maps.google.com/maps?q=loc:"+lat+"+"+lng);
    };

  }]);
