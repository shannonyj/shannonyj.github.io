/**
 * Created by shannon_z on 6/9/16.
 */
angular.module('inputApp', ['ngMaterial', 'ngMessages'])


.controller('AppCtrl', function($scope,$location,consts) {
        $scope.project = {
            description: '',
            clientName: ''
        };
        obj = $location.search();
        console.log(obj);
        if ("a" in obj){
            consts.output[0] = obj["a"]
        }
        if ("b" in obj){
            consts.output[1] = obj["b"]
        }
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

