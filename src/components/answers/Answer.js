import React from "react";
import { useSelector } from "react-redux";

const Answer = ({ answer, onClickAnswer, index }) => {
  return <div onClick={() => onClickAnswer(index)}>{answer}</div>;
};

export default Answer;
