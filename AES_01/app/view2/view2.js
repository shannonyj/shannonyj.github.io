/**
 * Created by f81602d on 9/27/2016.
 */

angular.module('myApp.view2', ['ngRoute', "Constants"])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/page-shiftrow.html',
            controller: 'View2Ctrl',
        });
    }])