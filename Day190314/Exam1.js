
// 입력 받아서 배열로 저장
// let arr = new Array();
let arr = [{name:"핸드폰", price:10000,selcount:0, selprice:0},{name:"모니터", price:5000,selcount:0, selprice:0},{name:"카메라", price:3000,selcount:0, selprice:0},{name:"마우스", price:400,selcount:0, selprice:0},{name:"키보드", price:800,selcount:0, selprice:0}]
$("#submit").click(function(){
  let flag = 0;
  for (let i = 0; i<5;i++){
    if(arr[i].name == $("#name").val()){
      arr[i].selcount += parseInt($("#selcount").val());
      arr[i].selprice = (arr[i].selcount * arr[i].price);
      flag = 1;
    }
  }
  if(flag == 0){
    alert("입력한 제품명이 없습니다.")
  }
});


// 입력받은 배열을 입력순으로 출력
$("#seltable").click(function(){
  $("#seltableout > table").empty();
  for(let j =0;j<5;j++){
    $("#seltableout > table").append('<tr id="findn"><td>' + "품목명 : " + arr[j].name + '</td><td>' + " 판매 단가 : "+arr[j].price + '</td><td>' + " 판매 수량 : " + arr[j].selcount + '</td><td>' + " 판매액 : " + arr[j].selprice +'</td></tr>');
  }
});


$("#selgraph").click(function(){
  $("#selgraphout").empty();
  let arrname = [];
  let arrprice = [];
  for (let i = 0;i<5;i++){
    arrname[i] = arr[i].name;
    arrprice[i] = arr[i].selprice;
  }
 plot1 = $.jqplot('selgraphout', [arrprice], {
     title: '매출액 그래프',
     seriesDefaults: {
         renderer:$.jqplot.BarRenderer,
         pointLabels: { show: true }
     },
     axes: {
       xaxis: {
           renderer: $.jqplot.CategoryAxisRenderer,
           ticks: arrname,
           label: '제품명',
           labelRenderer: $.jqplot.canvasTextRenderer
       },
       yaxis: {
           labelRenderer: $.jqplot.canvasAxisLabelRenderer,
           label: '매출액'
       }
     },
   });
 });
