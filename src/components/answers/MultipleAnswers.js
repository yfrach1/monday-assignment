import React from "react";
import "./MultipleAnswers.css";
import { useSelector } from "react-redux";
import { getRandomInt } from "../../common/utils";
import Answer from "./Answer";
const MultipleAnswers = ({ answers, checkAnswerHandler }) => {
  const correctAnswerIndex = useSelector(
    (state) => state.questionsReducer.correctAnswerIndex
  );
  const is5050Used = useSelector((state) => state.questionsReducer.is5050Used);

  let show = [true, true, true, true];

  if (is5050Used) {
    let questionsToBeCut = [];
    for (let i = 0; i < answers.length; i++) {
      questionsToBeCut.push(i);
    }
    let indexToBeCut;
    do {
      indexToBeCut = getRandomInt(4);
    } while (indexToBeCut === correctAnswerIndex);

    questionsToBeCut = questionsToBeCut.filter(
      (x) => x !== correctAnswerIndex && x !== indexToBeCut
    );

    show[questionsToBeCut[0]] = false;
    show[questionsToBeCut[1]] = false;
  }

  return (
    <>
      <div className="answers">
        {show[0] && (
          <Answer
            onClickAnswer={checkAnswerHandler}
            answer={answers[0]}
            index={0}
          />
        )}
        {show[1] && (
          <Answer
            onClickAnswer={checkAnswerHandler}
            answer={answers[1]}
            index={1}
          />
        )}
      </div>
      <div className="answers">
        {show[2] && (
          <Answer
            onClickAnswer={checkAnswerHandler}
            answer={answers[2]}
            index={2}
          />
        )}
        {show[3] && (
          <Answer
            onClickAnswer={checkAnswerHandler}
            answer={answers[3]}
            index={3}
          />
        )}
      </div>
    </>
  );
};

export default MultipleAnswers;
