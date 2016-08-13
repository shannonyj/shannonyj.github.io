/**
 * Created by shannon_z on 12/8/16.
 */

var myApp = angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]);

myApp.controller('NumberController', ['$scope', function($scope) {
    $scope.displaynumber = '0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0 0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0 0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0 0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0 0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0 0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0 0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0 0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0';
}]);

myApp.controller('SpicyController', ['$scope', function($scope) {
    $scope.customSpice = 'wasabi';
    $scope.spice = 'very';

    $scope.spicy = function(spice) {
        $scope.spice = spice;
    };
}]);