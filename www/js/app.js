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

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('events', {
    url: '/',
    templateUrl: 'templates/events.html',
    controller: 'EventCtrl'
  })
  .state('agendas', {
    url: '/agendas/:eventId',
    templateUrl: 'templates/events.html',
    controller: 'EventCtrl'
  })
  .state('map', {
    url: '/map/:eventId',
    templateUrl: 'templates/map.html',
    controller: 'MapCtrl'
  });


//EXAMPLE
  // .state("tab.home",{
  //   url:"/home",
  //   views: {
  //     'tab-home': {
  //       templateUrl: "templates/tab-home.html",
  //       controller: "HomeCtrl"
  //     }
  //   }
  // })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});



// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//     // for form inputs)
//     if (window.cordova && window.cordova.plugins.Keyboard) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//     }
//     if (window.StatusBar) {
//       // org.apache.cordova.statusbar required
//       StatusBar.styleDefault();
//     }
//   });
// })

// .config(function($stateProvider, $urlRouterProvider) {

//   // Ionic uses AngularUI Router which uses the concept of states
//   // Learn more here: https://github.com/angular-ui/ui-router
//   // Set up the various states which the app can be in.
//   // Each state's controller can be found in controllers.js
//   $stateProvider

//   .state('events', {
//     url: '/',
//     templateUrl: 'templates/events.html'
//   })
//   .state('agendas', {
//     url: '/agendas',
//     templateUrl: 'templates/agendas.html'
//   });

//   // if none of the above states are matched, use this as the fallback
//   $urlRouterProvider.otherwise('/');

// });

