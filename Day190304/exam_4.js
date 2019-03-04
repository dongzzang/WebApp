function printDOM(node, prefix){
  console.log(prefix+node.nodeName+'-'+node.nodeType);
  console.log(prefix + node.nodeName);
  for (let i = 0;i < node.childNodes.length;++i){
    printDOM(node.childNodes[i], prefix + '\t');
  }
}
// printDOM(document, '');


function highlightParas(containing){
    if(typeof containing == 'string'){
        containing = new RegExp(`\\b${containing}\\b`,'i');
    }
    const paras=document.getElementsByTagName('p');
    console.log(paras);
    for(let p of paras){
        if(!containing.test(p.textContent)){
            continue;
        }
        p.classList.add('highlight');
    }
}
// highlightParas('unique');

function removeParaHighlights(){
  const paras = document.querySelectorAll('p.highlight');
  for(let p of paras){
    p.classList.remove('highlight');
  }
}

let arr= new Array ();
let i = 0;
const insertValue = document.querySelectorAll('[data-action="submit"]');
for (let a of insertValue){
  a.addEventListener('click', evt=>{
    evt.preventDefault();
    console.log(insertValue);
    const paras=document.getElementsByTagName('input');
    // console.log(insertValue[0].dataset);
    arr[i] = ({name:paras[0].value, value:[paras[1].value, paras[2].value, paras[3].value], sum:(parseInt(paras[1].value) + parseInt(paras[2].value) + parseInt(paras[3].value)),avg:(parseInt(paras[1].value) + parseInt(paras[2].value) + parseInt(paras[3].value)) /3})
    // arr[i].name = paras[0].value;
    // arr[i].value = [paras[1].value, paras[2].value, paras[3].value];
    // arr[i].sum = parseInt(paras[1].value) + parseInt(paras[2].value) + parseInt(paras[3].value);
    // arr[i].avg = arr[i].sum /3;
    console.log(arr)
    i++;

  });
}
// console.log(arr);
console.log(insertValue);
console.log(insertValue[0].dataset);

const outputValue = document.querySelectorAll('[data-action="output"]');
for (let a of outputValue){
  a.addEventListener('click', evt=>{
    evt.preventDefault();
    console.log(outputValue);
    document.getElementById('output').innerHTML = "";
    // document.getElementById(`이름 : ${arr[0].name} \n 점수 : ${arr[0].value}`)
      // document.write(`이름 : ${arr[j].name} \n 점수 : ${arr[j].value}\n`);
    for (let j=0;j<i;j++){
      document.getElementById('output').append(`이름 : ${arr[j].name} 점수 : [${arr[j].value}] 총합 : ${arr[j].sum} 평균 : ${arr[j].avg}`);
    }


  });
}
const rankoutputValue = document.querySelectorAll('[data-action="rankoutput"]');
for (let a of rankoutputValue){
  a.addEventListener('click', evt=>{
    evt.preventDefault();
    console.log(rankoutputValue);
    let arr2 = arr;

    arr2.sort(function(a, b) {
    return b.sum - a.sum ;});
      document.getElementById('rankoutput').innerHTML = "";
    for (let j=0;j<i;j++){
      document.getElementById('rankoutput').append(`이름 : ${arr2[j].name} 점수 : [${arr2[j].value}] 총합 : ${arr2[j].sum} 평균 : ${arr2[j].avg}`);
    }
    // document.getElementById(`이름 : ${arr[0].name} \n 점수 : ${arr[0].value}`)
      // document.write(`이름 : ${arr[j].name} \n 점수 : ${arr[j].value}\n`);


  });
}

const findValue = document.querySelectorAll('[data-action="find"]');
for (let a of findValue){
  a.addEventListener('click', evt=>{
    evt.preventDefault();
    console.log(findValue);
    const paras=document.getElementsByTagName('input');
    console.log(paras[4].value);
    for(let j=0;j<i;j++){
      if(paras[4].value == arr[j].name){
        document.getElementById('findoutput').innerHTML = (`이름 : ${arr[j].name} 점수 : [${arr[j].value}] 총합 : ${arr[j].sum} 평균 : ${arr[j].avg}`);
      }
    }

  });
}
//
// const highlightActions = document.querySelectorAll('[data-action="highlight"]');
// console.log(highlightActions);
// console.log(highlightActions[0].dataset);
// highlightActions[0].dataset.containing = "unique";
// highlightActions[0].dataset.caseSensitive = "true";
// for(let a of highlightActions){
//   a.addEventListener('click',evt=>{
//     evt.preventDefault();
//     highlightParas(a.dataset.containing);
//     // highlightParas('unique');
//   });
// }
// const removeHighlightActions = document.querySelectorAll('[data-action="removeHighlights"]');
// for (let a of removeHighlightActions){
//   a.addEventListener('click', evt=>{
//     evt.preventDefault();
//     removeParaHighlights();
//   });
// }
