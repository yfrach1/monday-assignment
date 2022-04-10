export const Questions = [
  {
    questionNumber: 1,

    type: "multiple",
    difficulty: "easy",
    question: "What are Monday's colors?",
    correctAnswer: "green, red, yellow",
    incorrectAnswers: [
      "yellow, green, white",
      "red, yellow, blue",
      "green, pink, yellow",
    ],
  },

  {
    questionNumber: 2,
    difficulty: "medium",
    type: "bool",
    question: "Monday is a public-traded company on Nasdaq?",
    correctAnswer: "yes",
    incorrectAnswers: ["no"],
  },

  {
    questionNumber: 3,
    difficulty: "hard",
    type: "multiple",
    question: "What causes react component  to re-render?",
    correctAnswer: "state, props",
    incorrectAnswers: ["state", "props", "change in the DOM"],
  },
];
