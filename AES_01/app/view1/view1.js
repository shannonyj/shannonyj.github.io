/**
 * Created by f81602d on 9/29/2016.
 */

angular.module('myApp.view1', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/page-keyschedule.html',
            controller: 'insuredCtrl',
        })

            .when('/view1/result', {
                templateUrl: 'view1/page-keyScheduleResult.html'
            });
    }])

    .controller('View1Ctrl', function($scope, consts){

    })