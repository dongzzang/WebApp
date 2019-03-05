$(document).ready(function() {

  $("#txt:focus").css("background", "blue");
  $("tr:not(.no)").css("background","#AAA");
  // $("tr:even").css("background", "#AAA");

  // $("tr:eq(0) > td:eq(7)").css("background","#EEE");
  // // gt : index보다 높은 index들 /  lt: index보다 낮은 index들
  // $("tr:eq(1) > td:gt(2)").css("background","#EEE");
  // // odd : 홀수 요소 / even : 짝수 요소
  // $("tr:eq(2) > td:odd").css("background","#EEE");
  // $("tr:eq(3) > td:first").css("background","#AAA");
  // $("tr:eq(3) > td:last").css("background","#BBB");

  // // > : parent/child (부모 자식) |  공백: ascendant/descendant(조상 후손)
  // $("ul.url > li").css("border", "1px solid #ff0000");
  // $(".url2 li").css("border", "1px solid blue");
  // // 같은 형제
  // $("label + input").css("border","1px solid #ff0000")
  // // 나머지 형제
  // $("#info ~ input").css("background","blue");
  // $(".callout").css("border","solid 1px #ff0080");
  // $(".code").css("background","#ccc");
  // $(".code").css("margin","1px 2px");
  // $(".code").css("padding","1px 4px");
  // $(".code").css("font-family","monospace");
  // // $(".highlight").css("background","#ff0");
  // // $(".highlight").css("font-style","italic");
  //
  // $("div > a[target]").css("background", "#ccc");
  // $("div > a[href!='http://www.daum.net']").css("background", "#ff0080");
  // // id가 high로 시작하는 것을 css적용
  // $("div[id^='high']").css("background", "#ccc");
  //
  // // class가 de로 끝나는 것을 css 적용
  // $("span[class$='de']").css("font-style", "italic");
  // // id에 o가 포함되면 css 적용
  // $("div[id*='o']").css("font-style", "italic");
});
