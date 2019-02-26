// Java script 경우 함수 정의 전에 함수 호출을 사용해도 상관없지만
// 정의를 하고 호출을 하는것이 일반적이다.

// 함수 호출
sayHello();

// 함수 정의
function sayHello(){
  console.log("Hello World");
}
console.log("========================================");

function getGreeting(){
  return "Hello world";
}
console.log(getGreeting());
var message = getGreeting();
console.log(message);
console.log("========================================");

getGreeting();          // 함수 호출
var f = getGreeting;    // 함수 참조 (reference), object
console.log(f);
console.log(f());
console.log("========================================");

var o = {};
o.f = getGreeting;
console.log(o);
console.log(o.f());
console.log("========================================");

var arr = [1, 2, 3];
arr[1] = getGreeting;
for (var item of arr){
  console.log(typeof item);
}
console.log(arr);
console.log(arr[1]());
console.log("========================================");

function average(a, b){
  console.log(`a = ${a}\t b = ${b}`);
  return (a + b) / 2;
}

console.log(average(5, 10));
console.log("========================================");

var a = 10, b = 5;
console.log(average(a, b));
console.log("========================================");

average(5);
average();
console.log("========================================");

function func(x){
  console.log(`func내부 : x=${x}`);
  x = 5;
  console.log(`func내부 : x=${x} (할당후)`);
}

var x = 3;

console.log(`func를 호출하기전 : x = ${x}`);
func(x);
console.log(`func를 호출한 후  : x = ${x}`);
console.log("========================================");

function func2(o){
  o.message = `func2 안에서 수정함 (이전 값 : ${o.message})`;
}
var o2 = {message:"초기 값"};
console.log(`func2를 호출하기 전 : "${o2.message}"`);
func2(o2);
console.log(`func2를 호출한 후 : "${o2.message}"`);
console.log("========================================");
