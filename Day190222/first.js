var a = 10;
var b = 20;

console.log("Hello world!!!");
console.log("a= " + a);
console.log("a= " + b);

console.log(a+b);

a = 30;
console.log("a = " + a);

const x = 10;
console.log("x = " + x);

// x = 100;
console.log("x = " + x);

console.log("----------------------------------");
console.log();
var count = 10;
var blue = 0x0000ff;
var umask = 0o0022;
var roomTemp = 21.5;
var c = 3.0e6;
var e = -1.6e-19;
var inf = Infinity;
var ninf = -Infinity;
var nan = NaN;

console.log(count);
console.log(blue);
console.log(umask);
console.log(roomTemp);
console.log(c);
console.log(e);
console.log(inf);
console.log(ninf);
console.log(nan);

console.log("----------------------------------");
console.log();
// 1과 더했을 때 가장 근접한 값
var small = Number.EPSILON;
// 상수중 최대값
var bigInt = Number.MAX_SAFE_INTEGER;
// 실수(정수)중 최대값
var max = Number.MAX_VALUE;
var minInt = Number.MIN_SAFE_INTEGER;
var min = Number.MIN_VALUE;
var nInf = Number.NEGATIVE_INFINITY;
var nan2 = Number.NaN;
var inf2 = Number.POSITIVE_INFINITY;

console.log(small);
console.log(bigInt);
console.log(max);
console.log(minInt);
console.log(min);
console.log(nInf);
console.log(nan2);
console.log(inf2);

console.log("----------------------------------");
console.log();

var dialog = 'Sam looked up, and said "Hello,old friend", as Max walked in.';
var imperative = "don`t do that!";
console.log(dialog);
console.log(imperative);

var dialog1 = "He looked up and said \"don`t do that!\" to Max.";
var dialog2 = `He looked up and said "don\`t do that!" to Max.`;

console.log(dialog1);
console.log(dialog2);
console.log("hello, \nworld!!!");

console.log("----------------------------------");
console.log();

var currentTemp = 19.5;
const message = "The current temperature is " + currentTemp + "\u00b0c";
const message2 = `The current temperature is ${currentTemp}\u00b0c`;    // ES6 (Ecma Script6 부터 사용 가능)
                    // 무조건 ` 을 사용해야 안에 ${} 를 사용가능하다.
console.log(message);
console.log(message2);
const multiline1 = "line1\
line2";
const multiline2 = "line1\n\
line2"
const multiline3 = "line1\
line2\
line3";
const multiline4 = "line1\n" + "line2\n" + "line3";
const multiline5 = 'Current temperature: \n' + `\t${currentTemp}\u00b0c\n` +
"Don't worry... the heat is on!";

console.log(multiline1);
console.log(multiline2);
console.log(multiline3);
console.log(multiline4);
console.log(multiline5);

console.log("----------------------------------");
console.log();

const result = 3 + '30';
const result2 = 3 * '30';
console.log(result);
console.log(result2);
console.log("----------------------------------");
console.log();

const heating = true;
const cooling = false;
console.log(heating);
console.log(cooling);

const RED = Symbol("The color of a sunset!");
const ORANGE = Symbol("The color of a sunset!");
console.log(RED);
console.log(ORANGE);
// 완벽하게 같은지 비교
console.log(RED===ORANGE);

var currentTemp2;
console.log(currentTemp2);
var targetTemp2 = null;
currentTemp2 = 19.5;
console.log(currentTemp2);
console.log(targetTemp2);
currentTemp2 = undefined;
console.log(currentTemp2);

console.log("----------------------------------");
console.log();
var obj = {};
console.log(obj);
obj.color = "yellow";
console.log(obj);
// 없는 키를 생성함과 동시에 값까지 넣음
obj["not an identifier"] = 3;
console.log(obj);
console.log(obj["not an identifier"]);
console.log(obj["color"]);
const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj);

console.log("----------------------------------");
console.log();
