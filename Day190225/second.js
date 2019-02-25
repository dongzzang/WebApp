var r=2;
console.log(`\nr = ${r}`);

const r1 = r++ + r++;
console.log(`r1 = ${r1}`);
console.log(`r = ${r}`);

const r2 = ++r + ++r;
console.log(`r2 = ${r2}`);
console.log(`r = ${r}`);

const r3 = r++ + ++r;
console.log(`r3 = ${r3}`);
console.log(`r = ${r}`);

const r4 = ++r + r++;
console.log(`r4 = ${r4}`);
console.log(`r = ${r}`);

console.log("===============================");
console.log();

r = 10;
console.log(`r = ${r}`);

var r5 = r-- + r--;
console.log(`r5 = ${r5}`);
console.log(`r = ${r}`);

var r6 = --r + --r;
console.log(`r6 = ${r6}`);
console.log(`r = ${r}`);

var r7 = r-- + --r;
console.log(`r7 = ${r7}`);
console.log(`r = ${r}`);

var r8 = --r + r--;
console.log(`r8 = ${r8}`);
console.log(`r = ${r}`);

x = 3;
y = null;
x+=y = 6*5/2;
// 6*5 => /2 => y에 대입 => x에 x+y 대입
// 6*5 => 6*5/2 => y=6*5/2 => x=x+y
console.log(`\nx=${x} y=${y}`);

console.log("===============================");
console.log();

var n = 5;
s= "5";
console.log('\nn==="5" ==> ' + (n===s));
console.log('5!=="5" ==>' + (n!==s));
console.log('5===Number("5") ==> '+(n===Number(s)));
console.log('5!==Number("5") ==> '+(n!==Number(s)));
console.log('5 =="5" ==>' +(n==s));
console.log('5 !="5" ==>' +(n!=s));

var a = {name:"an object"};
var b = {name:"an object"};
//a와 b가 가지고 있는 레퍼런스(참조)가 다르기 때문에 a와 b는 다르다
//a가 가르키는 객체와 b가 가르키는 객체가 다르기 때문
console.log(`\n${a}===${b}==>`);
console.log(a===b);
console.log(`\n${a}!==${b}==>`);
console.log(a!==b);
console.log(`\n${a}==${b}==>`);
console.log(a==b);
console.log(`\n${a}!=${b}==>`);
console.log(a!=b);

console.log("===============================");
console.log();
