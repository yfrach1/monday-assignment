import React from "react";
import { useSelector } from "react-redux";

const Answer = ({ answer, onClickAnswer, index, succcess }) => {
  const correctAnswerIndex = useSelector(
    (state) => state.questionsReducer.correctAnswerIndex
  );
  return <div onClick={() => onClickAnswer(index)}>{answer}</div>;
};

export default Answer;
