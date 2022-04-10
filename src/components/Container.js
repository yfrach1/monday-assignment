import React from "react";
import Question from "./Question";
import Answers from "./answers/Answers";
import HelpToolbar from "./HelpToolbar";
import CountDownClock from "./widget/CountDownClock";
import "./Container.css";
const Container = ({
  type,
  question,
  correctAnswer,
  incorrectAnswers,
  timeEndHandler,
  difficulty,
  questionNumberByDifficulty,
  numOfQuestionByDifficulty,
}) => {
  return (
    <div className="container">
      <div className="count_down_clock">
        <CountDownClock timeEndHandler={timeEndHandler} />
        <div>{difficulty}</div>
        <div>
          {questionNumberByDifficulty}/{numOfQuestionByDifficulty}
        </div>
      </div>
      <HelpToolbar type={type} />
      <Question question={question} />
      <Answers
        type={type}
        correctAnswer={correctAnswer}
        incorrectAnswers={incorrectAnswers}
      />
    </div>
  );
};

export default Container;
