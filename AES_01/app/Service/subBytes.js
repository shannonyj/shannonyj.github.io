/**
 * Created by shannon_z on 12/12/16.
 */

myApp.service("sub",["consts","$http", function (consts, $http) {
        var sbox;
        sbox = consts.s_enc;
        this.findsbox =  function (val){
            return (sbox[parseInt(val[0],16)+1]["x"+val[1]]).substr(2,2);
        };
        console.log(this.findsbox("01"));
    }]);