// 1. 5개의 품목 정보가 "tv",5000,"vtr",25000,"camera",15000...
// tv, vtr, camera, computer, keyboard
// 20개의 판매 정보는 "tv", 5, "vtr", 2, "computer", 1
// 입력순 , 품목순, 판매금액순

let item = [{name:"tv",price:5000,sell:5}, {name:"vtr",price:2500,sell:2}, {name:"camera",price:1500,sell:3},
            {name:"computer",price:4000,sell:6}, {name:"keyboard",price:1000,sell:4}];
let total = 0;
function sellprice(item){
  for(items of item){
    items.sellprice = items.price*items.sell;
    total+= items.sellprice;
  }
}

function showNormal(item){
  console.log("        <<<판매 현황표(입력순)>>>      ");
  console.log("품목명           단가     판매수량     판매금액");
  for(items of item){
    console.log(`${items.name}      \t${items.price}        \t${items.sell}   \t${items.sellprice}`);
  }
  console.log(`                       총매출액 :       ${total}`);
}

function showName(item){
  item.sort((a, b) => a.name > b.name);
  console.log("        <<<판매 현황표(품목순)>>>      ");
  console.log("품목명           단가     판매수량     판매금액");
  for(items of item){
    console.log(`${items.name}      \t${items.price}        \t${items.sell}   \t${items.sellprice}`);
  }
  console.log(`                       총매출액 :       ${total}`);
}

function showSellprice(item){
  item.sort((a, b) => a.sellprice < b.sellprice);
  console.log("        <<<판매 현황표(판매금액순)>>>      ");
  console.log("품목명           단가     판매수량     판매금액");
  for(items of item){
    console.log(`${items.name}      \t${items.price}        \t${items.sell}   \t${items.sellprice}`);
  }
  console.log(`                       총매출액 :       ${total}`);
}

sellprice(item);
showNormal(item);
console.log();
showName(item);
console.log();
showSellprice(item);
