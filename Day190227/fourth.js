let arr1 = [1, 2, 3];
let arr2 = ["one", 2, "three"];
let arr3 = [[1, 2, 3], ["one", 2, "three"]];
let arr4 = [
    {name:"Fred", type:"object", luckyNumber:[5, 7, 13]},
    [
      {name:"Susan", type:"object"},
      {name:"Anthony", type:"object"},
    // ], 1, function() {return "arrays can contain functions too";}, "three"
  ], 1, (() => "arrays can contain functions too"), "three"
];

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log("====================================")

console.log(arr1[0]);
console.log(arr1[2]);
console.log(arr3[1]);
console.log(arr4[1][0]);
console.log(arr4[3]());

console.log(arr1.length);
console.log(arr4.length);
console.log(arr4[1].length);

arr1[4] = 5;
console.log(arr1);
console.log(arr1.length);

console.log(arr2[10]);
console.log(arr2.length);
console.log("====================================")

let arr5 = new Array();

let arr6 = new Array(1, 2, 3);
// Array에 숫자 1개만 넣으면 해당 숫자만큼 배열을 만들어 둔다.
let arr7 = new Array(2);
let arr8 = new Array("2");

console.log(arr5);
console.log(arr5.length);
console.log(arr6);
console.log(arr6.length);
console.log(arr7);
console.log(arr7.length);
console.log(arr8);
console.log(arr8.length);
console.log("====================================")
