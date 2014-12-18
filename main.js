function clickbox() {
  document.getElementById("count").value = garde;
  return false;
}

function getScores() {
  var garde = 0;
  var answers = [
  new getFillIn('统一建模语言','1_1'),
  new getFillIn(['封装性','继承性','多态性'],['1_2_1','1_2_2','1_2_3']),
  new getsingle('B','2_1'),
  new getsingle('A','2_2'),
  new getmultiple('ABD','3_1'),
  new getmultiple('ABC','3_2'),
  new getestimate('no','4_1'),
  new getestimate('yes','4_2'),
  new getshort('模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。','5_1')
  ];
  _.forEach(answers,function(answer){
    garde += answer.getScore();
  });
  return garde;
}
