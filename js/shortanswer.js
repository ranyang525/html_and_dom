function ShortAnswer(answer,identifier) {
  Question.call(this, answer,identifier);
}

ShortAnswer.prototype = Object.create(Question.prototype);

ShortAnswer.prototype.constructor = ShortAnswer;

ShortAnswer.prototype.getScore = function() {
    var score = 0;
    if (this.answer === document.getElementById(this.identifier).value) {
      score = 20;
    }
    return score;

};
