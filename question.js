function Question(identifier, answer, defaultScore) {
  this.identifier = identifier;
  this.answer = answer;
  this.defaultScore = defaultScore;
}

Question.prototype.getScore = function() {
};
