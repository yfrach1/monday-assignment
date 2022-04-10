import React from "react";
import "./Question.css";

const Question = ({ question }) => {
  return (
    <div className="displayQuestion">
      <div className="question">{question}</div>
    </div>
  );
};

export default Question;
