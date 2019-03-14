
// 입력 받아서 배열로 저장
let arr = new Array();
let i = 0;
let flag = 0;
$("#btnAdd").click(function(){
  arr[i] = ({name:$("#tablename1").val(), time:$("#tabletime1").val(), text:$("#txtarea1").val(), count:i+1});
  i++;
  console.log(arr);
  $("#outputdiv > table").append('<tr><td>' + i + '</td>' + '<td>' + arr[i-1].name +  '</td>'+ '<td>' + arr[i-1].time  +  '</td><td>' + arr[i-1].text + '</td></tr>');

});


$("#btnfind").click(function(){
  let findname1 = $("#findname").val();
  $("#finddiv > table").empty();
  for(let j = 0;j<i;j++){
    if(arr[j].name == findname1){
      $("#finddiv > table").append('<tr><td>' + (parseInt(j)+1) + '</td>' + '<td>' + arr[j].name +  '</td>'+ '<td>' + arr[j].time  +  '</td><td>' + arr[i-1].text + '</td></tr>');
      flag = 1;
    }
  }
  if(flag == 0){
    alert("찾으시는 이름이 없습니다!!");
  }
  if(flag == 1){
    flag = 0;
  }
});

function clickname(){
  alert("hello");
}
