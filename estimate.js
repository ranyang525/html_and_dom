function Estimate(answer,identifier) {
  Question.call(this, answer,identifier);
}

Estimate.prototype = Object.create(Estimate.prototype);

Estimate.prototype.constructor = Estimate;

Estimate.prototype.getScore = function() {
  var score = 0;
  var estimate = document.getElementsByName(this.identifier);
  for (var i = 0; i < estimate.length; i++) {
    if (estimate[i].checked === true && this.answer === estimate[i].value) {
      score = 10;
    }
  }
  return score;
};
