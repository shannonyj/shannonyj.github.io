/**
 * Created by shannon_z on 12/8/16.
 */


myApp.controller('NumberController', ['$scope', function($scope, consts) {
    $scope.displaynumber = '0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0 0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0 0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0 0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0 0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0 0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0 0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0 0 0 1 0 1 1 0 1 1 0 1 0 1 1 1 0 0 1 0';
    $scope.c = consts.output;
}]);

myApp.controller('SpicyController', ['$scope', function($scope) {
    $scope.customSpice = 'wasabi';
    $scope.spice = 'very';

    $scope.spicy = function(spice) {
        $scope.spice = spice;
    };
}]);


myApp.controller('insuredCtrl', function($scope, $http, consts) {
    $http.get("Controller/RCON.json").success(function (response) {
        $scope.members = response.rcon;
    });
    $http.get("Controller/SBox.json").success(function (response) {
        $scope.sbox = response.s_enc;
    });
    $scope.test01 = consts;
    $scope.resultarr = {};
    $scope.findsbox = function (val){
        $scope.resultarr[($scope.sbox[parseInt(val[0])+1]["x"+val[1]])] = {'background-color':'red'};
      return ($scope.sbox[parseInt(val[0])+1]["x"+val[1]]).substr(2,2);
    };
    PolynomialField.updateAllMath();
});


myApp.controller('keyCtrl', function($scope, consts, sub){
    consts.finalkey[0] = [[consts.output[1][0],consts.output[1][4],consts.output[1][8],consts.output[1][12]],
                          [consts.output[1][1],consts.output[1][5],consts.output[1][9],consts.output[1][13]],
                          [consts.output[1][2],consts.output[1][6],consts.output[1][10],consts.output[1][14]],
                          [consts.output[1][3],consts.output[1][7],consts.output[1][11],consts.output[1][15]]];
    //consts.finalkey[0] = [["04","ed","ab","75"],["84","26","03","14"],["04","ed","ab","75"],["84","26","03","14"]];
    consts.finalkey[0] = [["0f","15","71", "c9"],["47", "d9", "e8", "59"],[ "0c", "b7", "ad", "d6"],[ "af", "7f", "67", "98"]];
    $scope.test01 = consts;


    for (var j = 1; j < 10; j++){
        for (var m = 0; m<4; m ++){
            wMinus4 = [consts.finalkey[j-1][m][0],consts.finalkey[j-1][m][1],consts.finalkey[j-1][m][2],consts.finalkey[j-1][m][3]];
            if(m == 0){
                rot=[consts.finalkey[j-1][3][1],consts.finalkey[j-1][3][2],consts.finalkey[j-1][3][3],consts.finalkey[j-1][3][0]];
                console.log(rot);
                subtemp = [sub.findsbox(rot[0]),sub.findsbox(rot[1]),sub.findsbox(rot[2]), sub.findsbox(rot[3])];
                temp = [PolynomialField.AESAdd(consts.rcon[j-1]["c0"],PolynomialField.AESAdd(subtemp[0],wMinus4[0])),
                    PolynomialField.AESAdd(consts.rcon[j-1]["c1"],PolynomialField.AESAdd(subtemp[1],wMinus4[1])),
                    PolynomialField.AESAdd(consts.rcon[j-1]["c1"],PolynomialField.AESAdd(subtemp[2],wMinus4[2])),
                    PolynomialField.AESAdd(consts.rcon[j-1]["c1"],PolynomialField.AESAdd(subtemp[3],wMinus4[3]))];
            }else{
                temp = [PolynomialField.AESAdd(wMinus4[0],consts.finalkey[j][m-1][0]),
                    PolynomialField.AESAdd(wMinus4[1],consts.finalkey[j][m-1][1]),
                    PolynomialField.AESAdd(wMinus4[2],consts.finalkey[j][m-1][2]),
                    PolynomialField.AESAdd(wMinus4[3],consts.finalkey[j][m-1][3])];
            }
            console.log(wMinus4);
            console.log(temp);

            consts.finalkey[j].push(temp);
        }

    }
    $scope.keyresult = consts.finalkey;
});


//var key = $scope.transformation();
