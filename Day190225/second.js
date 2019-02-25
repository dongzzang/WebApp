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

console.log("\n"+(3>5));
console.log(3>=5);
console.log(3<5);
console.log(3<=5);
console.log(5>5);
console.log(5>=5);
console.log(5<5);
console.log(5<=5);
// 실수형의 경우 동등연산자를 사용하면 안된다.
n=0;
while(true)
{
  n+=0.1;
  // if(n==0.3)
  if(Math.abs(n-0.3) < Number.EPSILON)
  {
    break;
  }
}
console.log(`\nStoped at ${n}\n`);
console.log("===============================");
console.log();

console.log(3+5+"8");
console.log("3"+5+8);

var skipIt = true;
x = 0;
//skipIt가 True임으로 or연산자 뒤를 연산할 필요가 없다고 판단해서
//x++를 무시한다
var result = skipIt || x++;
console.log(`\nskipIt = ${skipIt}`);
console.log(`x =${x}`);
console.log(`result = ${result}`);
console.log(`x=${x}`);

var doIt = false;
result =doIt&&x++;
console.log(`\ndoIt = ${doIt}`);
console.log(`x=${x}`);
console.log(`result=${result}`);
console.log(`x=${x}`);
console.log("===============================");
console.log();
//객체는 boolean으로 따지면 True
var suppliedOptions = {};
var options = suppliedOptions || {name:"Default"};
console.log("\noptions = "+options);

suppliedOptions = null;
options = suppliedOptions || {name:"default"};
console.log("\noptions = "+options);

doIt = false;
result = doIt ? "Dis it!" : "Didn`t do it";
console.log(`\nresult = ${result}`);

var x = 0;
var y = 10;
var z;
//comma 연산자는 대입하고 y++
z =(x++,y++);
console.log(`\nx=${x}`);
console.log(`y=${y}`);
console.log(`z=${z}`);

console.log("===============================");
console.log();

n=22;
console.log(`\n${n} >>1 `);
console.log(n >>1);

console.log(`\n${n} >>>1 `);
console.log(n >>>1);

console.log(`\n${n} = ~${n}`);
n=~n;
console.log(`${n} = ~${n}`);

n++;
console.log(`\n${n}++`);
console.log(`\n${n} >>1`);
console.log(n >>1);
// >> 의 경우 -일때 채워지는 값이 1인데
// >>>는 무조건 채워지는 값이 0이다
console.log(`\n${n} >>>1`);
console.log(n >>>1);
console.log("===============================");
console.log();

const FLAG_EXECUTE = 1;
const FLAG_WRITE = 2;
const FLAG_READ = 4;

var p = FLAG_READ | FLAG_WRITE;
var hasWrite = p&FLAG_WRITE;
var hasExecute = p&FLAG_EXECUTE;
console.log(`\np=${p}`);
console.log(`hasWrite=${hasWrite}`);
console.log(`hasExecute=${hasExecute}`);
//^는 xor연산자 같으면 0 다르면 1
p = p^FLAG_WRITE;
console.log(`\np=${p}`);
p = p^FLAG_WRITE;
console.log(`\np=${p}`);
const hasReadOrExecute = p&(FLAG_READ|FLAG_EXECUTE);
//and연산과 or연산이 같이있으면 and연산이 우선순위가 높다.
const hasReadAndExecute = p&(FLAG_READ|FLAG_EXECUTE) === (FLAG_READ|FLAG_EXECUTE);
console.log(`\hasReadOrExecute = ${hasReadOrExecute}`);
console.log(`\hasReadAndExecute = ${hasReadAndExecute}`);
console.log("===============================");
console.log();

console.log("\ntype of undefind =>" +(typeof undefind));
console.log("\ntype of null =>" +(typeof null));
console.log("\ntype of {} =>" +(typeof {}));
console.log("\ntype of [] =>" +(typeof []));
console.log("\ntype of true =>" +(typeof true));
console.log("\ntype of 1 =>" +(typeof 1));
console.log('\ntype of "" =>' +(typeof ""));
console.log("\ntype of Symbol() =>" +(typeof Symbol()));
console.log("\ntype of function() {}=>" +(typeof function() {}));

var v, v;
v = v2 = 9.8;
console.log(`\nv=${v}`);
console.log(`\nv2=${v2}`);
var nums = [3, 5, 15, 7, 5];
var i = 0;
while((n=nums[i]) < 10 && i++ < nums.length)
{
  console.log(`Number less than 10:${n}`);
}
console.log(`Number greater than 10 found:${n}`);
console.log(`${nums.length -i -1}numbers remain`);
console.log("===============================");
console.log();

var obj = {b1:2, c1:3, d1:4};
var {a1,b1,c1} = obj;
console.log(`\na1=${a1}\tb1=${b1}\tc1=${c1}`);
var obj2 = {b2:2, c2:3, d2:4};
var a2, b2, c2;
({a2, b2, c2} = obj2);
console.log(`\na2=${a2}\tb2=${b2}\tc2=${c2}`);
var arr= [1, 2, 3];
var [x5, y5] = arr;
console.log(`\nx5 = ${x5}\ty5 = ${y5}`);
var arr2 = [1, 2, 3, 4, 5];
var [x6, y6, ...rest] = arr2;
console.log(`\nx6 = ${x6}\ty6=${y6}\trest=${rest}`);
var a5 = 5, b5 = 10;
console.log(`\na5 = ${a5}\tb5=${b5}`);
[a5, b5] = [b5, a5];
console.log(`\na5 = ${a5}\tb5=${b5}`);
console.log("===============================");
console.log();
