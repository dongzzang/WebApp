
// 입력 받아서 배열로 저장
let arr = new Array();
let i = 0;
$("#btnAdd").click(function(){
  arr[i] = ({name:$("#tablename1").val(), time:$("#tabletime1").val(), text:$("#txtarea1").val(), count:i+1});
  i++;
  console.log(arr);
  $("#outputdiv > table").append('<tr><td>' + i + '</td>' + '<td><a href="#" onclick="clickname()">' + arr[i-1].name +  '</a></td>'+ '<td>' + arr[i-1].time  +  '</td></tr>');

});
$("#btnremove").click(function(){
  let findname = $("#tablename1").val();
  let findtime = $("#tabletime1").val();
  for(let j=0;j<i;j++){
    if(arr[j].name==findname){
      if(arr[j].time==findtime){
        $('#outputdiv > table > tr:nth-child(j)').remove();
      }
    }
  }
});

$("#btnfind").click(function(){
  let findname1 = $("#findname").val();
  $("#finddiv > table").empty();
  for(let j = 0;j<i;j++){
    if(arr[j].name == findname1){
      $("#finddiv > table").append('<tr><td>' + (parseInt(j)+1) + '</td>' + '<td><a href="#" onclick="clickname()">' + arr[j].name +  '</a></td>'+ '<td>' + arr[j].time  +  '</td></tr>');
    }
  }
});

function clickname(){
  alert("hello");
}
