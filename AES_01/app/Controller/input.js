/**
 * Created by shannon_z on 6/9/16.
 */

myApp.controller('AppCtrl', function($scope,$location,consts) {
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

       /* $scope.outputTrans = function(arr){
            for (var l = 0; l < 4; l ++){
                output01
            }
        };*/
    })
    .constant("consts",{
        output: [[],[]],
        finalkey: [[],[],[],[],[],[],[],[],[],[]],
        rcon:
            [
                {
                    "c0": "01",
                    "c1": "00"
                },
                {
                    "c0": "02",
                    "c1": "00"
                },
                {
                    "c0": "04",
                    "c1": "00"
                },
                {
                    "c0": "08",
                    "c1": "00"
                },
                {
                    "c0": "10",
                    "c1": "00"
                },
                {
                    "c0": "20",
                    "c1": "00"
                },
                {
                    "c0": "40",
                    "c1": "00"
                },
                {
                    "c0": "80",
                    "c1": "00"
                },
                {
                    "c0": "1b",
                    "c1": "00"
                },
                {
                    "c0": "36",
                    "c1": "00"
                }
            ],
        s_enc:
            [
                { "title":" ",
                    "x0":"x0",
                    "x1":"x1",
                    "x2":"x2",
                    "x3":"x3",
                    "x4":"x4",
                    "x5":"x5",
                    "x6":"x6",
                    "x7":"x7",
                    "x8":"x8",
                    "x9":"x9",
                    "xa":"xa",
                    "xb":"xb",
                    "xc":"xc",
                    "xd":"xd",
                    "xe":"xe",
                    "xf":"xf"
                },
                { "title":" 0x ",
                    "x0":"0x63",
                    "x1":"0x7c",
                    "x2":"0x77",
                    "x3":"0x7b",
                    "x4":"0xf2",
                    "x5":"0x6b",
                    "x6":"0x6f",
                    "x7":"0xc5",
                    "x8":"0x30",
                    "x9":"0x01",
                    "xa":"0x67",
                    "xb":"0x2b",
                    "xc":"0xfe",
                    "xd":"0xd7",
                    "xe":"0xab",
                    "xf":"0x76"
                },

                {"title":"1x",
                    "x0":"0xca",
                    "x1":"0x82",
                    "x2":"0xc9",
                    "x3":"0x7d",
                    "x4":"0xfa",
                    "x5":"0x59",
                    "x6":"0x47",
                    "x7":"0xf0",
                    "x8":"0xad",
                    "x9":"0xd4",
                    "xa":"0xa2",
                    "xb":"0xaf",
                    "xc":"0x9c",
                    "xd":"0xa4",
                    "xe":"0x72",
                    "xf":"0xc0"
                },
                {"title":"2x",
                    "x0":"0xb7",
                    "x1":"0xfd",
                    "x2":"0x93",
                    "x3":"0x26",
                    "x4":"0x36",
                    "x5":"0x3f",
                    "x6":"0xf7",
                    "x7":"0xcc",
                    "x8":"0x34",
                    "x9":"0xa5",
                    "xa":"0xe5",
                    "xb":"0xf1",
                    "xc":"0x71",
                    "xd":"0xd8",
                    "xe":"0x31",
                    "xf":"0x15"
                },
                {"title":"3x",
                    "x0":"0x04",
                    "x1":"0xc7",
                    "x2":"0x23",
                    "x3":"0xc3",
                    "x4":"0x18",
                    "x5":"0x96",
                    "x6":"0x05",
                    "x7":"0x9a",
                    "x8":"0x07",
                    "x9":"0x12",
                    "xa":"0x80",
                    "xb":"0xe2",
                    "xc":"0xeb",
                    "xd":"0x27",
                    "xe":"0xb2",
                    "xf":"0x75"
                },
                {"title":"4x",
                    "x0":"0x09",
                    "x1":"0x83",
                    "x2":"0x2c",
                    "x3":"0x1a",
                    "x4":"0x1b",
                    "x5":"0x6e",
                    "x6":"0x5a",
                    "x7":"0xa0",
                    "x8":"0x52",
                    "x9":"0x3b",
                    "xa":"0xd6",
                    "xb":"0xb3",
                    "xc":"0x29",
                    "xd":"0xe3",
                    "xe":"0x2f",
                    "xf":"0x84"
                },
                {"title":"5x",
                    "x0":"0x53",
                    "x1":"0xd1",
                    "x2":"0x00",
                    "x3":"0xed",
                    "x4":"0x20",
                    "x5":"0xfc",
                    "x6":"0xb1",
                    "x7":"0x5b",
                    "x8":"0x6a",
                    "x9":"0xcb",
                    "xa":"0xbe",
                    "xb":"0x39",
                    "xc":"0x4a",
                    "xd":"0x4c",
                    "xe":"0x58",
                    "xf":"0xcf"
                },
                {"title":"6x",
                    "x0":"0xd0",
                    "x1":"0xef",
                    "x2":"0xaa",
                    "x3":"0xfb",
                    "x4":"0x43",
                    "x5":"0x4d",
                    "x6":"0x33",
                    "x7":"0x85",
                    "x8":"0x45",
                    "x9":"0xf9",
                    "xa":"0x02",
                    "xb":"0x7f",
                    "xc":"0x50",
                    "xd":"0x3c",
                    "xe":"0x9f",
                    "xf":"0xa8"
                },
                {"title":"7x",
                    "x0":"0x51",
                    "x1":"0xa3",
                    "x2":"0x40",
                    "x3":"0x8f",
                    "x4":"0x92",
                    "x5":"0x9d",
                    "x6":"0x38",
                    "x7":"0xf5",
                    "x8":"0xbc",
                    "x9":"0xb6",
                    "xa":"0xda",
                    "xb":"0x21",
                    "xc":"0x10",
                    "xd":"0xff",
                    "xe":"0xf3",
                    "xf":"0xd2"
                },
                {"title":"8x",
                    "x0":"0xcd",
                    "x1":"0x0c",
                    "x2":"0x13",
                    "x3":"0xec",
                    "x4":"0x5f",
                    "x5":"0x97",
                    "x6":"0x44",
                    "x7":"0x17",
                    "x8":"0xc4",
                    "x9":"0xa7",
                    "xa":"0x7e",
                    "xb":"0x3d",
                    "xc":"0x64",
                    "xd":"0x5d",
                    "xe":"0x19",
                    "xf":"0x73"
                },
                {"title":"9x",
                    "x0":"0x60",
                    "x1":"0x81",
                    "x2":"0x4f",
                    "x3":"0xdc",
                    "x4":"0x22",
                    "x5":"0x2a",
                    "x6":"0x90",
                    "x7":"0x88",
                    "x8":"0x46",
                    "x9":"0xee",
                    "xa":"0xb8",
                    "xb":"0x14",
                    "xc":"0xde",
                    "xd":"0x5e",
                    "xe":"0x0b",
                    "xf":"0xdb"
                },
                {"title":"ax",
                    "x0":"0xe0",
                    "x1":"0x32",
                    "x2":"0x3a",
                    "x3":"0x0a",
                    "x4":"0x49",
                    "x5":"0x06",
                    "x6":"0x24",
                    "x7":"0x5c",
                    "x8":"0xc2",
                    "x9":"0xd3",
                    "xa":"0xac",
                    "xb":"0x62",
                    "xc":"0x91",
                    "xd":"0x95",
                    "xe":"0xe4",
                    "xf":"0x79"
                },
                {"title":"bx",
                    "x0":"0xe7",
                    "x1":"0xc8",
                    "x2":"0x37",
                    "x3":"0x6d",
                    "x4":"0x8d",
                    "x5":"0xd5",
                    "x6":"0x4e",
                    "x7":"0xa9",
                    "x8":"0x6c",
                    "x9":"0x56",
                    "xa":"0xf4",
                    "xb":"0xea",
                    "xc":"0x65",
                    "xd":"0x7a",
                    "xe":"0xae",
                    "xf":"0x08"
                },
                {"title":"cx",
                    "x0":"0xba",
                    "x1":"0x78",
                    "x2":"0x25",
                    "x3":"0x2e",
                    "x4":"0x1c",
                    "x5":"0xa6",
                    "x6":"0xb4",
                    "x7":"0xc6",
                    "x8":"0xe8",
                    "x9":"0xdd",
                    "xa":"0x74",
                    "xb":"0x1f",
                    "xc":"0x4b",
                    "xd":"0xbd",
                    "xe":"0x8b",
                    "xf":"0x8a"
                },
                {"title":"dx",
                    "x0":"0x70",
                    "x1":"0x3e",
                    "x2":"0xb5",
                    "x3":"0x66",
                    "x4":"0x48",
                    "x5":"0x03",
                    "x6":"0xf6",
                    "x7":"0x0e",
                    "x8":"0x61",
                    "x9":"0x35",
                    "xa":"0x57",
                    "xb":"0xb9",
                    "xc":"0x86",
                    "xd":"0xc1",
                    "xe":"0x1d",
                    "xf":"0x9e"
                },
                {"title":"ex",
                    "x0":"0xe1",
                    "x1":"0xf8",
                    "x2":"0x98",
                    "x3":"0x11",
                    "x4":"0x69",
                    "x5":"0xd9",
                    "x6":"0x8e",
                    "x7":"0x94",
                    "x8":"0x9b",
                    "x9":"0x1e",
                    "xa":"0x87",
                    "xb":"0xe9",
                    "xc":"0xce",
                    "xd":"0x55",
                    "xe":"0x28",
                    "xf":"0xdf"
                },
                {"title":"fx",
                    "x0":"0x8c",
                    "x1":"0xa1",
                    "x2":"0x89",
                    "x3":"0x0d",
                    "x4":"0xbf",
                    "x5":"0xe6",
                    "x6":"0x42",
                    "x7":"0x68",
                    "x8":"0x41",
                    "x9":"0x99",
                    "xa":"0x2d",
                    "xb":"0x0f",
                    "xc":"0xb0",
                    "xd":"0x54",
                    "xe":"0xbb",
                    "xf":"0x16"
                }
            ],

    })
    .service("sub",["consts","$http", function (consts, $http) {
        var sbox;
        sbox = consts.s_enc;
        this.findsbox =  function (val){
            return (sbox[parseInt(val[0],16)+1]["x"+val[1]]).substr(2,2);
        };
        console.log(this.findsbox("01"));
    }]);

