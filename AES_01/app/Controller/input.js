/**
 * Created by shannon_z on 6/9/16.
 */
angular.module('inputErrorsApp', ['ngMaterial', 'ngMessages'])


    .controller('AppCtrl', function($scope) {
        $scope.project = {
            description: '1234asdfqwerty00',
        };
        $scope.input01 = '1234asdfqwerty00';
        $scope.result = [];
        $scope.transformation = function (input01){
            for (var i = 0; i < $scope.input01.length; i++){
                output01 = input01.charCodeAt(i).toString(16);
                $scope.result.push(output01);
            }
        };
    });
