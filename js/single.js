function Single(answer,identifier) {
  Question.call(this, answer,identifier);
}

Single.prototype = Object.create(Question.prototype);

Single.prototype.constructor = Single;

Single.prototype.getScore = function() {
  
  var score = 0;
  var single = document.getElementsByName(this.identifier);
  for (var i = 0; i < single.length; i++) {
    if (single[i].checked === true && this.answer === single[i].value) {
      score += 10;
    }
  }
  return score;

};
