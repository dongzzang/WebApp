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
console.log("====================================");

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
console.log("====================================");

let arr9 = ["b", "c", "d"];
console.log(arr9);
// push를 하면 index가 출력
// pop을 하면 값이 출력
// 스택처럼 사용
console.log(arr9.push("e"));
console.log(arr9);

console.log(arr9.pop());
console.log(arr9);
// unshift를 하면 index가 출력
// shift를 하면 값이 출력
// 큐 처럼 사용
console.log(arr9.unshift("a"));
console.log(arr9);

console.log(arr9.shift());
console.log(arr9);
console.log("====================================");

let arr10 = [1, 2, 3];
console.log(arr10);
// concat 으로 사용하면 원본 데이터엔 변화를 줄 수 없다.
console.log(arr10.concat(4, 5, 6));
console.log(arr10);

console.log(arr10.concat([4, 5, 6]));
console.log(arr10);

console.log(arr10.concat([4, 5], 6));
console.log(arr10);

console.log(arr10.concat([4, [5, 6]]));
console.log(arr10);

console.log(arr10.concat('a','b','c')[arr10.length-1]);

console.log("====================================");

let arr11 = [1, 2, 3, 4, 5];
console.log(arr11);
// 3번 index부터 출력
console.log(arr11.slice(3));
console.log(arr11);
// 2번 index부터 4-1번 index까지 출력
console.log(arr11.slice(2, 4));
console.log(arr11);

console.log(arr11.slice(-2));
console.log(arr11);

console.log(arr11.slice(1, -2));
console.log(arr11);

console.log(arr11.slice(-2, -1));
console.log(arr11);
console.log("====================================");

let arr12 = [1, 5, 7];
console.log(arr12);
// slice의 경우 1, 2번째 인수는 필수
// 1번째 인수는 시작index / 2번째 인수는 0일경우 추가, 0보다 클경우 삭제 개수
// 3번째 인수부터는 값

// 1번 index에 2, 3, 4추가
arr12.splice(1, 0, 2, 3, 4);
console.log(arr12);
// 5번 index에 6을 추가
arr12.splice(5, 0, 6);
console.log(arr12);
// 1번 index부터 2개 삭제
arr12.splice(1, 2);
console.log(arr12);
// 2번 index부터 1개를 삭제하고 'a'와 'b'를 추가
arr12.splice(2, 1, 'a', 'b');
console.log(arr12);
console.log("====================================");

let arr13 = [1, 2, 3, 4];
console.log(arr13);
// 1번 index에 2번index부터 끝까지 복사
arr13.copyWithin(1, 2);
console.log(arr13);
// 2번 index에 0번index부터 2-1번 index까지 복사
arr13.copyWithin(2, 0, 2);
console.log(arr13);

arr13.copyWithin(0, -3, -1);
console.log(arr13);
console.log("====================================");

let arr14 = new Array(5).fill(1);
console.log(arr14);

arr14.fill("a");
console.log(arr14);
// 1번 index부터 끝까지 "b"로 채움
arr14.fill("b", 1);
console.log(arr14);
// 2번 index부터 4-1번index 까지 "c"로 채움
arr14.fill("c", 2, 4);
console.log(arr14);
// -4 index부터 끝까지 5.5로 채움
arr14.fill(5.5, -4);
console.log(arr14);
// -3 index부터 -1-1index 까지 0으로 채움
arr14.fill(0, -3, -1);
console.log(arr14);
console.log("====================================");

let arr15 = [1, 2, 3, 4, 5];
console.log(arr15);

arr15.reverse();
console.log(arr15);
arr15 = [5, 3, 2, 4, 1];
console.log(arr15);
arr15.sort();
console.log(arr15);
arr15 = [{name:"Suzanne"}, {name:"Jim"}, {name:"Trevor"}, {name:"Amanda"}];
console.log(arr15);
arr15.sort();
console.log(arr15);
// Call back 함수는 System(JavaScript) 내부에서 자동호출
// a는 sort 할 대상 / b는 sort 비교 대상
arr15.sort((a, b) => a.name > b.name);
console.log(arr15);
arr15.sort((a, b) => a.name[1] < b.name[1]);
console.log(arr15);
console.log("====================================");
