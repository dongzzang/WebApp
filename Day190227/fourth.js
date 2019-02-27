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

const o = {name:"Jerry"};
let arr16 = [1, 5, "a", o, true, 5, [1, 2], "9"];
console.log(o);
console.log(arr16);
// indexOf와 lastIndexOf는 찾으려는 값을 1개밖에 찾지 못한다.
// 찾을 값을 찾지못하면 -1을 return 한다.
console.log(arr16.indexOf(5));
console.log(arr16.lastIndexOf(5));
console.log(arr16.indexOf("a"));
console.log(arr16.lastIndexOf("a"));
console.log(arr16.indexOf({name:"Jerry"}));
console.log(arr16.indexOf(o));
console.log(arr16.indexOf([1, 2]));
console.log(arr16.indexOf("9"));
console.log(arr16.indexOf(9));
console.log("====================================");
// indexOf와 lastIndexOf의 두번째 인자는 검색 시작 위치를 의미한다.
console.log(arr16.indexOf("a", 5));
console.log(arr16.indexOf(5, 5));
console.log(arr16.lastIndexOf(5, 4));
console.log(arr16.lastIndexOf(true, 3));
console.log("====================================");

let array = [1, 5, 2, 5, 4, 3, 5, 7, 6, 9, 10, 11];

let searchResult = [];
let cnt = 0;
let i =0;

// My Code
while(true){
  if(array.indexOf(5,cnt) == -1){
    break;
  }
  else{
    searchResult[i] = array.indexOf(5,cnt);
    cnt = array.indexOf(5,searchResult[i]+1);
    i++;
  }
}
console.log(searchResult);

// Teacher Code
search = array.indexOf(5, 0);
while (search !== -1){
  searchResult.push(search);
  search = array.indexOf(5, search + 1);
}

if(searchResult.length >0){
  console.log(searchResult);
}
else{
  console.log("data not found");
}

console.log("====================================");

let arr17 = [{id:5, name:"Judith"}, {id:7,name:"Francis"}];
console.log(arr17);
// findIndex의 경우 검색 시작위치 지정을 할 수 없다.
console.log(arr17.findIndex(o=>o.id === 5));
console.log(arr17.findIndex(o=>o.name === "Francis"));
console.log(arr17.findIndex(o=>o === 3));
console.log(arr17.findIndex(o=>o.id === 17));
// find의 경우 결과값이 index가 아닌 값이 출력된다.
console.log(arr17.find(o=>o.id ===5));
console.log(arr17.find(o=>o.id ===2));

let arr18 = [1, 17, 16, 5, 4, 16, 10, 3, 49];

console.log(arr18.find((x, i) =>i>2 && Number.isInteger(Math.sqrt(x))));
console.log("====================================");

let arr19 = [5, 7, 12, 15, 17];
console.log(arr19.some(x =>x%2 === 0));
console.log(arr19.some(x =>Number.isInteger(Math.sqrt(x))));

let arr20 = [4, 6, 16, 36];
// 홀수 가 없으면 true
console.log(arr20.every(x =>x%2 === 0));
console.log(arr20.every(x =>Number.isInteger(Math.sqrt(x))));
console.log("====================================");

// map은 배열을 가공해서 변형할 때 사용한다.
let cart = [{name:"Widget", price:9.95}, {name:"Gadget", price:22.95}];
console.log(cart);
let names = cart.map(x => x.name);
console.log(names);
let prices = cart.map(x => x.price);
console.log(prices);
let discountPrices = prices.map(x=>x*0.8);
console.log(discountPrices);

let items = ["Widget", "Gadget"];
let prices2 = [9.95, 22.95];
console.log(items);
console.log(prices2);
// 원본배열을 이용하여 배열을 생성했다.
let cart2 = items.map((x, i) => ({name:x, price:prices2[i]}));
console.log(cart2);
console.log("====================================");

let cards = [];
for(let suit of['H', 'C', 'D', 'S']){
  for(let value = 1;value<=13;++value){
    cards.push({suit, value});
  }
}
console.log(cards);
console.log();
console.log(cards.filter(c=>c.value===2));
console.log();
console.log(cards.filter(c=>c.suit==='D'));
console.log();
console.log(cards.filter(c=>c.value===10));
console.log();
console.log(cards.filter(c=>c.value>10 && c.suit==='H'));
console.log("====================================");

let arr21 = [5, 7, 2, 4];
// reduce 에서 a 는 누적 x는 요소 0은 초기값을 0으로 설정한다는 뜻
let sum = arr21.reduce((a, x)=>a+=x, 0);
//let sum = arr21.reduce((a + x)=>a+=x);
console.log(arr21);
console.log(sum);

let words = ["BeachBall", "Rodeo", "Angel", "Avrdvark", "Xylophone", "November", "Chocolate"];
let alphaetical = words.reduce((a, x)=>{
      if(!a[x[0]]) a[x[0]] = [];
      a[x[0]].push(x);
      return a;
}, {});

console.log(words);
console.log(alphaetical);

let longWords = words.reduce((a, w)=>w.length > 6? a+" "+w:a,"").trim();
console.log(longWords);
