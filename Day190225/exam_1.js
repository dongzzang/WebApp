// 1. 1~10000 사이의 3의 배수와 5의 배수 개수를 출력하는 프로그램
// 2. 20개의 data를 배열에 저장한 후 양수/음수, 양수일 때 짝수/ 홀수 개수를 출력하는 프로그램(배열 사용)
// 3. 구구단을 출력하는 프로그램 (2단~ 9단)
//      2단
//      2x1 = 2
//      2x2 = 4
//      3단
//      3x1 = 3
// 4. 10명의 학생 성적을 출력하는 프로그램(object 사용) 60이하면 Fail 90이상이면 Excellent 나머지는 Normal
//     hong 50 50 50 150 50.0 Fail
//     Kim 90 90 90 270 90.0 Excellent
//     lee 70 70 70 210 70.0 Normal

console.log("=============Exam_1==================");
console.log();
var threebe = 0;
var fivebe = 0;
for (var i =1;i<=10000;i++)
{
  if(i%3==0){
    threebe++;
  }
  if(i%5==0){
    fivebe++;
  }
}
console.log(`3의 배수의 개수 : ${threebe}개`);
console.log();
console.log(`5의 배수의 개수 : ${fivebe}개`);

console.log("=============Exam_2==================");
console.log();
var arr = [-10, 50, 30, 22, 13, -61, 15, 19, 25, 26, 38, 35, 12, -78, 89, 98, 56, 65, -45, 54];
var nNum = 0;
var pNum = 0;
var hol = 0;
var zak = 0;
for(var face of arr)
{
  if(face > 0){
    pNum++;
    if(face %2 == 0){
      zak++;
    }
    else {
      hol++;
    }
  }
  else {
    nNum++;
  }
}
console.log(`음수의 개수 : ${nNum}`);
console.log(`양수의 개수 : ${pNum}`);
console.log(`양수 짝수의 개수 : ${zak}, 양수 홀수의 개수 : ${hol}`);
console.log("=============Exam_3==================");
console.log();
for (var i=2;i<=9;i++){
  console.log(`${i}단`);
  for (var j=1;j<=9;j++){
    console.log(`${i}X${j} = ${i*j}`);
  }
  console.log();
}

console.log("=============Exam_4==================");
console.log();
var school = [{name:'hong',국어:50,영어:50,수학:50},
              {name:'kim',국어:70,영어:70,수학:70},
              {name:'lee',국어:90,영어:90,수학:90},
              {name:'park',국어:100,영어:100,수학:100},
              {name:'joo',국어:60,영어:70,수학:80},
              {name:'koo',국어:90,영어:80,수학:90},
              {name:'nam',국어:70,영어:100,수학:100},
              {name:'hwang',국어:80,영어:60,수학:60},
              {name:'han',국어:80,영어:30,수학:100},
              {name:'jung',국어:100,영어:70,수학:80}];



for (var i =0;i<10;i++){
  school[i].sum = school[i].국어+school[i].수학+school[i].영어;
  school[i].avg = Math.floor(school[i].sum/3);
  // Math.floor 은 소수점 버림을 나타낸다.
  if(school[i].avg >=90){
    school[i].grade = "Excellent";
  }
  else if(school[i].avg <=60){
    school[i].grade = "Fail";
  }
  else{
    school[i].grade = "Normal";
  }
  console.log(`${school[i].name} ${school[i].국어} ${school[i].영어} ${school[i].수학} ${school[i].sum} ${school[i].avg} ${school[i].grade}`);
}

/*

var sum[0] = kor[0] + kor[0] +kor[0]
var sum[1] = kor[1] + kor[1] +kor[1];
..



*/
