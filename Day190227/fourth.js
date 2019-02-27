let arr1 = [1, 2, 3];
let arr2 = ["one", 2, "three"];
let arr3 = [[1, 2, 3], ["one", 2, "three"]];
let arr4 = [
    {name:"Fred", type:"object", luckyNumber:[5, 7, 13]},
    [
      {name:"Susan", type:"object"},
      {name:"Anthony", type:"object"},
    ], 1, function() {return "arrays can contain functions too";}, "three"
];

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log("====================================")
