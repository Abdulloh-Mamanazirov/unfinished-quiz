import React from "react";

const shuffleAnswers = (question) => {
  console.log(question);
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];
  return unshuffledAnswers
    .map((answer) => ({ sort: Math.random(), value: answer }))
    .sort((a, b) => a.sort - b.sort)
    .map((obj) => obj.value);
};

export default shuffleAnswers;

/**
 import React from "react";

const shuffleAnswers = (question) => {
  let correctAnswer = question.map(e => e.correctAnswer)
  let incorrectAnswers = question.map(e =>e.incorrectAnswers)
  // console.log(question);
  const unshuffledAnswers = [
    correctAnswer,
    ...incorrectAnswers,
  ];
  return unshuffledAnswers
    .map((answer) => ({ sort: Math.random(), value: answer }))
    .sort((a, b) => a.sort - b.sort)
    .map((obj) => obj.value);
};

export default shuffleAnswers;

 */