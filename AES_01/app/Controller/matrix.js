/**
 * Created by f81602d on 2/6/2017.
 */

myApp.controller('matrixCtrl', function($scope,$location,consts) {
    $scope.preset = consts.default;
    $scope.test01 = '40';

    $scope.con = [
        "02 & 03 & 01 & 01",
        "01 & 02 & 03 & 01",
        "01 & 01 & 02 & 03",
        "03 & 01 & 01 & 02"
    ];



    /*
    var temp = val % 4;
    var temp2 = parseInt(val/4);

    temp is an indicator for row
    case 0:
        $scope.mat =  02 & 03 & 01 & 01;
    case 1:
        $scope.mat = 01 & 02 & 03 & 01;
    case 2:
        $scope.mat = 01 & 01 & 02 & 03;
    case 3:
        $scope.mat = 03 & 01 & 01 & 02;


    /*temp2 is an indicator for column
    case 0:*/



});




