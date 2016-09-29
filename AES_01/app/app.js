// app.js

// define our application and pull in ngRoute and ngAnimate
var myApp = angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  //'myApp.view1',
  //'myApp.view2',
  //'myApp.version',
  'ngMaterial',
    'ngMessages',
]);

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
myApp.config(function($routeProvider) {

  $routeProvider

  // home page
      .when('/', {
        templateUrl: 'page-home.html',
        controller: 'mainController'
      })

      // about page
      .when('/input', {
        templateUrl: 'input/page-input.html',
        controller: 'inputController'
      })

      // contact page
      .when('/overview', {
        templateUrl: 'view1/page-overview.html',
        controller: 'overviewController'
      });

});


// CONTROLLERS ============================================
// home page controller
myApp.controller('mainController', function($scope) {
  $scope.pageClass = 'page-home';
});

// about page controller
myApp.controller('inputController', function($scope) {
  $scope.pageClass = 'page-input';
});

// contact page controller
myApp.controller('overviewController', function($scope) {
  $scope.pageClass = 'page-overview';
});
