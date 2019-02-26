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
