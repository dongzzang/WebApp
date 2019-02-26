// 1. 10명의 학생 성적을 출력하는 프로그램(함수 사용) 60이하면 Fail 90이상이면 Excellent 나머지는 Normal
//     hong 50 50 50 150 50.0 Fail        3
//     Kim 90 90 90 270 90.0 Excellent    1
//     lee 70 70 70 210 70.0 Normal       2

//     Kim 90 90 90 270 90.0 Excellent    1
//     lee 70 70 70 210 70.0 Normal       2
//     hong 50 50 50 150 50.0 Fail        3
// 원래 데이터 순으로 출력 후 석차순으로 출력하기.


// console.log("=============Exam_4==================");
// console.log();
// var school = [{name:'hong',국어:50,영어:50,수학:50},
//               {name:'kim',국어:70,영어:70,수학:70},
//               {name:'lee',국어:90,영어:90,수학:90},
//               {name:'park',국어:100,영어:100,수학:100},
//               {name:'joo',국어:60,영어:70,수학:80},
//               {name:'koo',국어:90,영어:80,수학:90},
//               {name:'nam',국어:70,영어:100,수학:100},
//               {name:'hwang',국어:80,영어:60,수학:60},
//               {name:'han',국어:80,영어:30,수학:100},
//               {name:'jung',국어:100,영어:70,수학:80}];
//
//
//
// for (var i =0;i<10;i++){
//   school[i].sum = school[i].국어+school[i].수학+school[i].영어;
//   school[i].avg = Math.floor(school[i].sum/3);
//   // Math.floor 은 소수점 버림을 나타낸다.
//   if(school[i].avg >=90){
//     school[i].grade = "Excellent";
//   }
//   else if(school[i].avg <=60){
//     school[i].grade = "Fail";
//   }
//   else{
//     school[i].grade = "Normal";
//   }
//   console.log(`${school[i].name} ${school[i].국어} ${school[i].영어} ${school[i].수학} ${school[i].sum} ${school[i].avg} ${school[i].grade}`);
// }
const MAX_SUBJECT = 3;
const EXCELLENT = 90;
const FAIL = 60;
let highrank = 0;
let rank = 1;
let count = 0;
var students = [ { name: "hong", subjects: [ 50, 50, 50 ], total: 0, average: 0.0, grade: "Normal", rank:0},
{ name: "kim", subjects: [ 90, 90, 90 ], total: 0, average: 0.0, grade: "Normal", rank:0},
{ name: "lee", subjects: [ 70, 70, 70 ], total: 0, average: 0.0, grade: "Normal", rank:0 },
{ name: "park", subjects: [ 60, 60, 60 ], total: 0, average: 0.0, grade: "Normal", rank:0 },
{ name: "yoon", subjects: [ 40, 40, 40 ], total: 0, average: 0.0, grade: "Normal", rank:0 },
{ name: "im", subjects: [ 30, 30, 30 ], total: 0, average: 0.0, grade: "Normal", rank:0 },
{ name: "oh", subjects: [ 20, 20, 20 ], total: 0, average: 0.0, grade: "Normal", rank:0 },
{ name: "gong", subjects: [ 80, 80, 80 ], total: 0, average: 0.0, grade: "Normal", rank:0 },
{ name: "kang", subjects: [ 77, 77, 77 ], total: 0, average: 0.0, grade: "Normal", rank:0 },
{ name: "seo", subjects: [ 66, 86, 89 ], total: 0, average: 0.0, grade: "Normal", rank:0 } ];

function makerank(students){
  for(var i = 0;i<students.length;i++){
    for (var j = 0;j<students.length;j++){
      if(students[j].rank != 0){
        continue;
      }
      if(students[j].total > highrank){
        highrank = students[j].total;
        count = j;
      }
    }
    students[count].rank = rank;
    rank++;
    count = 0;
    highrank=0;
  }
}
function makesumavg(students){
  for ( var student of students ) {
      for ( var subject of student["subjects"] ) {
          student["total"] += subject;
      }
      student["average"] = student["total"] / MAX_SUBJECT;
      if ( student["average"] >= EXCELLENT ) {
          student["grade"] = "Excellent";
      } else if ( student["average"] < FAIL ) {
          student["grade"] = "Fail";
      }
  }
}
function printnormal(students){
  for (var student of students){
    console.log(`${student.name} ${student.subjects} ${student.total} ${student.average} ${student.grade} ${student.rank}`);
  }
}
function printrank(students){
  let ran = 1;
  while(ran != students.length+1){
    for (var student of students){
      if(student.rank == ran){
        console.log(`${student.name} ${student.subjects} ${student.total} ${student.average} ${student.grade} ${student.rank}`);
        ran++;
      }
    }
  }
}

makesumavg(students);
makerank(students);

printnormal(students);
console.log();
printrank(students);
