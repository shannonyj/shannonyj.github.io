/**
 * Created by shannon_z on 6/9/16.
 */
angular.module('inputErrorsApp', ['ngMaterial', 'ngMessages'])


    .controller('AppCtrl', function($scope,consts) {
        $scope.project = {
            description: '',
            clientName: ''
        };
        $scope.result1 = consts.output[0];
        $scope.result = consts.output[1];
        $scope.transformation = function (input01,arr){
            while (arr.length>0) arr.pop();
            var tmp = [];
            for (var i = 0; i < input01.length; i++){
                output01 = input01.charCodeAt(i).toString(16);
                arr.push(output01);
            }
        };
    })
    .constant("consts",{
        output: [[],[]]
    });
