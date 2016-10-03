/**
 * Created by f81602d on 9/26/2016.
 */

myApp.controller('NumberController', ['$scope', function($scope) {

}]);

myApp.controller('sBoxCtrl', function($scope, $http, consts) {
    $http.get("Controller/SBox.json").success(function (response) {
        $scope.s_enc = response.s_enc;
    });
    $scope.test01 = consts;
});

myApp.controller('MultipleCtrl', function($scope, consts){
    $scope.input = consts.output;
    $scope.c = PolynomialField.AESCompute($scope.input[0][1], $scope.input[0][2]);
});