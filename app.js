function clickbox() {
  var garde = 0;

  garde += getCompletion('统一建模语言','1_1');
  garde += getCompletion('封装性','1_2_1');
  garde += getCompletion('继承性','1_2_2');
  garde += getCompletion('多态性','1_2_3');

  garde += getsingle('B','2_1');
  garde += getsingle('A','2_2');

  garde += getmultiple('ABD','3_1');
  garde += getmultiple('ABC','3_2');

  garde += getestimate('no','4_1');
  garde += getestimate('yes','4_2');

  garde += getshort('模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。','5_1');

  document.getElementById("count").value = garde;

}

function getCompletion(answer,id) {
  var garde = 0;
  if (answer === document.getElementById(id).value) {
    garde = 5;
  }
  return garde;
}

function getsingle(answer,name) {
  var garde = 0;
  var single = document.getElementsByName(name);
  for (var i = 0; i < single.length; i++) {
    if (single[i].checked === true && answer === single[i].value) {
      garde = 10;
    }
  }
  return garde;
}

function getmultiple(answer,name) {
  var garde = 0;
  var multipleArray = [];
  var multiple = document.getElementsByName(name);
  for (var i = 0; i < multiple.length; i++) {
    if (multiple[i].checked === true) {
      multipleArray += multiple[i].value;
    }
  }
  if (answer.toString() === multipleArray.toString()) {
    garde = 10;
  }
  return garde;
}

function getestimate(answer,name) {
  var garde = 0;
  var estimate = document.getElementsByName(name);
  for (var i = 0; i < estimate.length; i++) {
    if (estimate[i].checked === true && answer === estimate[i].value) {
      garde = 10;
    }
  }
  return garde;
}

function getshort(answer,id) {
  var garde = 0;
  if (answer === document.getElementById(id).value) {
    garde = 20;
  }
  return garde;
}
