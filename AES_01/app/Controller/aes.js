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