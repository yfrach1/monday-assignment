import React from "react";
import Answer from "./Answer";
const BooleanAnswers = ({ answers, checkAnswerHandler }) => {
  return (
    <>
      <div className="answers">
        <Answer
          onClickAnswer={checkAnswerHandler}
          answer={answers[0]}
          index={0}
        />
        <Answer
          onClickAnswer={checkAnswerHandler}
          answer={answers[1]}
          index={1}
        />
      </div>
    </>
  );
};

export default BooleanAnswers;
