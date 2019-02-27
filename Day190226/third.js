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
  console.log(o);
  o.message = `func2 안에서 수정함 (이전 값 : ${o.message})`;
  console.log(o);
}
var o2 = {message:"초기 값"};
console.log(`func2를 호출하기 전 : "${o2.message}"`);
func2(o2);
console.log(`func2를 호출한 후 : "${o2.message}"`);

console.log("========================================");

// func3 실행시 새로운 object를 생성했다가 사라진다.
function func3(o){
  o.message = `func3에서 수정함`;
  o = {message:"새로운 객체"};
  console.log(`func 내부 : o.message = ${o.message} (할당 후)`);
}

var o3 = {message:"초기 값"};
console.log(`func를 호출하기 전 : o.message = "${o3.message}"`);
func3(o3);
console.log(`func를 호출한 후 : o.message = "${o3.message}"`);
console.log("========================================");

// func4 실행시 원래 존재하던 o4의 레퍼런스는 사라진다.
function func4(o){
  o = {message:"새로운 객체"};
  return o;
}

var o4 = {message:"초기 값"};
console.log(`func를 호출하기 전 : o.message = "${o4.message}"`);
o4 = func4(o4);
console.log(`func를 호출한 후 : o.message = "${o4.message}"`);
console.log("========================================");

function getSentence({subject, verb, object}){
  return `${subject} ${verb} ${object}`;
}

var o5 = {subject:"I", verb:"love", object:"JavaScript"};
console.log(getSentence(o5));
console.log("========================================");

function getSentenceArray([subject, verb, object]){
  return `${subject} ${verb} ${object}`;
}

var arr2 = ["I", "love", "JavaScript"];
console.log(getSentenceArray(arr2));
console.log("========================================");

function addPrefix(prefix, ...words){
  var prefixWords = [];
  for(var i =0;i<words.length;++i){
    prefixWords[i] = prefix + words[i];
  }
  return prefixWords;
}

console.log(addPrefix("con", "verse", "vex"));
console.log("========================================");

function f3(a, b = "defualt", c=3){
  return `${a} - ${b} - ${c}`;
}

console.log(f3(5, 6, 7));
console.log(f3(5, 6));
console.log(f3(5));
console.log(f3());
console.log("========================================");

var o5 = {
  name:"Hong",
  bark:function(){return "Woof!"}
}
console.log(o5.name + " " + o5.bark());

var o6 = {
  name:"Kim",
  bark() {return "Woof!"}
}

console.log(o6.name + " " + o6.bark());
console.log("========================================");

var o7 = {
  name:"Park",
  speak() {return `My name is ${this.name}`;}
}
console.log(o7.speak());

var speak = o7.speak;

console.log(speak == o7.speak);
console.log(speak());
console.log("========================================");

// getReverseName은 o8의 name 을 직접 접근할 수 없다(this 사용 불가)
// 이유는 정의만 해뒀고 호출은 하지 않았기 때문이다.
// 따라서 const self = this 를 이용해서
// o8의 name 을 접근할 수 있게 변경 가능 하다.
var o8 = {
  name:'Julie',
  greetBackwards:function(){
    const self = this;
    function getReverseName(){
      var nameBackwards = '';
      for (var i = self.name.length-1;i>=0;--i){
   // for (var i = this.name.length-1;i>=0;--i){
        nameBackwards += self.name[i];
     // nameBackwards += this.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym, olleH`;
  }
};
console.log(o8.greetBackwards());
console.log("========================================");
// => 는 람다식 표기법
var f11 = function() {return "Hello!!!";}
var f11_r = () => "Hello!!!";
console.log(f11_r());

var f12 = function(name){return `Hello${name}`;}
var f12_r = name =>`Hello${name}`;
console.log(f12_r("Hong"));
var f13 = function(name) {return a+b;}
const f13_r = (a, b) => a+b;
console.log(f13_r(5, 10));
console.log("========================================");
var o9 = {
  name:'Julie',
  greetBackwards:function(){
    const getReverseName = () =>{
      var nameBackwards = '';
      for (var i = this.name.length-1;i>=0;--i){
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym, olleH`;
  }
};
console.log(o9.greetBackwards());
console.log("========================================");

var bruce = {name:"Brace"};
var madeline = {name:"Madeline"};

function greet(){
  return `Hello, I'm ${this.name}`;
}


console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));
console.log("========================================");

function update(birthYear, occupation){
  this.birthYear = birthYear;
  this.occupation = occupation;
}
// call뒤의 맨처음껀 this로 사용할 객체이다.
update.call(bruce, 1949, 'singer');
console.log(bruce);
update.call(madeline, 1942, 'actress');
console.log(madeline);

update.apply(bruce, [1955, 'actor']);
console.log(bruce);
update.apply(madeline, [1918, 'writer']);
console.log(madeline);
console.log("========================================");
var xx;
function fs(xx){
  return xx+3;
}
console.log(fs(5));
console.log(xx);
console.log("========================================");

function fs1(){
  console.log('one');
}
function fs2(){
  console.log('two');
}

fs2();
fs1();
fs2();
console.log("========================================");

const xxx = 3;
function fs3(){
  console.log(xxx);
  console.log(yyy);
}
{
  var yyy = 5;
  // 변수 선언을 하지 않고 먼저 사용한 후 var로 선언하면 사용이 가능하다
  // 함수내에 없는 변수도 var로 설정되어있으면 찾아서 사용한다
  fs3();
}
console.log("========================================");

let globalFunc;
{
  let blockVar = 'a';
  globalFunc = function(){
    console.log(blockVar);
  }
}
console.log(typeof globalFunc);
globalFunc();
console.log("========================================");

let fs4;
{
  let o = {note:'Safe'};
  fs4 = function() {return  o;}
}
// 원래는 변수 o는 중괄호 범위를 벗어나면 사용할 수 상관없지만
// 변수 fs4에 함수 래퍼런스를 넣어줌으로써 범위를 벗어나도 사용할 수 있게한다.

console.log(typeof fs4);
console.log(fs4());
let oRef = fs4();
console.log(typeof oRef);
console.log(oRef);
oRef.note = "Not so safe after all";
console.log(oRef);
console.log("========================================");
