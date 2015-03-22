// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'angularMoment'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config( [
  '$compileProvider',
  function( $compileProvider ) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|geo|map|maps):/);
    // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
  }
])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('events', {
    url: '/',
    templateUrl: 'templates/events.html',
    controller: 'EventCtrl'
  });
  // .state('agendas', {
  //   url: '/agendas/:eventId',
  //   templateUrl: 'templates/events.html',
  //   controller: 'EventCtrl'
  // });

  $urlRouterProvider.otherwise('/');

});
// .run(function($rootScope, $location, $anchorScroll, $routeParams) {

//   $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
//     $location.hash($routeParams.scrollTo);
//     $anchorScroll();
//   });
// });