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
  'ngCookies',
  'ngToast'
   // 'material.svgAssetsCache'
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

      //display page
      .when('/display',{
          templateUrl: 'page-display.html',
      })

})
    .config(['$mdIconProvider', function ($mdIconProvider) {
        $mdIconProvider.icon('md-close', 'img/icons/ic_close_24px.svg', 24);
    }]);


// CONTROLLERS ============================================
// home page controller
myApp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});

// about page controller
myApp.controller('inputController', function($scope) {
    $scope.pageClass = 'page-input';
});

// Result Page controller
myApp.controller('resultController', function($scope) {
    $scope.pageClass = 'page-result';
});

// MathJax controller
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

//Menu Controller
myApp.controller('sideNavCtrl', function($scope, $mdSidenav, $log, $location, $anchorScroll) {
    $scope.toggleRightNav = buildToggler('right');
    $scope.isOpenRight = function(){
        return $mdSidenav('right').isOpen();
    };

    function buildToggler(navID) {
        return function() {
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    //$log.debug("toggle " + navID + " is done");
                });
        }
    }
});

// Jump in-between pages
myApp.controller('jumpCtrl', function($scope, $mdSidenav, $log, $location, $anchorScroll) {
    $scope.scrollTo = function(div) {
        $location.hash(div);
        $anchorScroll();
        $mdSidenav('right').close()
            .then(function () {
                //$log.debug("close RIGHT is done");
            });
    };
    $scope.gotoBottom = function() {
        // set the location.hash to the id of the element you wish to scroll to.
        $location.hash('bottom');
        $anchorScroll();
    };
});

