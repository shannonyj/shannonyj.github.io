// app.js

// define our application and pull in ngRoute and ngAnimate
var myApp = angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'myApp.view1',
  'myApp.view2',
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

      // input page
      .when('/input', {
        templateUrl: 'view1/page-input.html',
        controller: 'inputController'
      })

      // overview page
      .when('/overview', {
        templateUrl: 'view1/page-overview.html',
        controller: 'overviewController'
      })

      .when('/finalresult',{
          templateUrl: 'view1/page-result.html',
          controller: 'resultController'
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
}).directive("mathjaxAutobind", function () {
    return {
        restrict: "A",
        controller: ["$scope", "$element", "$attrs",
            function ($scope, $element, $attrs) {
                $scope.$watch($attrs.mathjaxAutobind, function (texExpression) {
                    var texScript = angular.element("<script type='math/tex'>")
                        .html(texExpression ? texExpression : "");
                    $element.html("");
                    $element.append(texScript);
                    MathJax.Hub.Queue(["Update", MathJax.Hub, $element[0]]);
                });
            }]
    };
});

myApp.controller('resultController', function($scope) {
    $scope.pageClass = 'page-result';
});

