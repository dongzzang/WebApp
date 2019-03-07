
// 입력 받아서 배열로 저장
let arr = new Array();
let i = 0;
$("#submit").click(function(){
  let sumval = parseInt($("#first_value").val()) + parseInt($("#second_value").val()) + parseInt($("#third_value").val());
  let avgval = sumval / 3;
  arr[i] = ({name:$("#name").val(), value:[$("#first_value").val(), $("#second_value").val(), $("#third_value").val()], sum:sumval,avg:avgval});
  i++;
  console.log(arr);
});


// 입력받은 배열을 입력순으로 출력
$("#output").click(function(){
  $("#outputdiv").empty();
  for(let j =0;j<i;j++){
    $("#outputdiv").append('<tr id="findn"><td>' + "이름 : " + arr[j].name + " 점수 : "+arr[j].value + " 합계 : " + arr[j].sum + " 평균 : " + arr[j].avg +'</td></tr>');
  }
});


// 입력받은 배열을 총합순으로 출력

$("#rankoutput").click(function(){
  $("#rankoutputdiv").empty();
  let arr2 = arr;
  arr2.sort(function(a, b) {
  return b.sum - a.sum ;});
  for(let j =0;j<i;j++){
    $("#rankoutputdiv").append('<tr id="findn"><td>' + "이름 : " + arr2[j].name + " 점수 : "+arr2[j].value + " 합계 : " + arr2[j].sum + " 평균 : " + arr2[j].avg +'</td></tr>');
  }
});

// 사람 검색
$(document).ready(function(){
  $("#findname").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#findn td").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
