/**
 * Created by shannon_z on 12/8/16.
 */


myApp.controller('NumberController', ['$scope', function($scope, consts) {
    $scope.displaynumber = '0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0 0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0 0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0 0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0 0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0 0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0 0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0 0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0';
    $scope.c = consts;
}]);

myApp.controller('SpicyController', ['$scope', function($scope) {
    $scope.customSpice = 'wasabi';
    $scope.spice = 'very';

    $scope.spicy = function(spice) {
        $scope.spice = spice;
    };
}]);


myApp.controller('ASCIIController', ['$scope', function($scope){

    //$scope.input01 = '1234asdfqwerty00';
    $scope.result = [];

    $scope.transformation = function (input01, flag){
        $scope.result = [];
        for (var i = 0; i < $scope.input01.length; i++){
            output01 = input01.charCodeAt(i).toString(16);
            $scope.result.push(output01);
        }
    };
}]);

myApp.controller('insuredCtrl', function($scope, $http, consts) {
    $http.get("Controller/RCON.json").success(function (response) {
        $scope.members = response.rcon;
    });
    $scope.test01 = consts;
});


//var key = $scope.transformation();
