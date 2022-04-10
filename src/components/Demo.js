import React from "react";
import "./Demo.css";
import { useHistory } from "react-router-dom";
import ClientRoutes from "./navigation/Routes";
import { Questions } from "../Data/DemoQuestions";
import { useDispatch, useSelector } from "react-redux";
import Container from "./Container";
import {
  incrementQuestionIndex,
  setTimer,
} from "../store/reducers/questionsReducer";
import Monday from "../common/Monday";

const Demo = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const questionIndex = useSelector(
    (state) => state.questionsReducer.questionIndex
  );

  const questionTimeEndHandler = () => {
    dispatch(incrementQuestionIndex());
    dispatch(setTimer(31));
  };

  ///up is good, down need to be changed

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, rgba(255, 0, 0, 0.1),rgba(0, 128, 0, 0.1),rgba(255, 255, 0, 0.1))",
      }}
    >
      <Monday />
      {questionIndex < 3 ? (
        <div className="container">
          <Container
            type={Questions[questionIndex].type}
            question={Questions[questionIndex].question}
            correctAnswer={Questions[questionIndex].correctAnswer}
            incorrectAnswers={Questions[questionIndex].incorrectAnswers}
            timeEndHandler={questionTimeEndHandler}
            duration={30}
            difficulty={Questions[questionIndex].difficulty}
            questionNumberByDifficulty={(questionIndex % 3) + 1}
            numOfQuestionByDifficulty={3}
          />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Gmae Over</h1>
          <div
            className="generic_button"
            onClick={() => {
              history.push(ClientRoutes.User.main);
            }}
          >
            Back to HomePage
          </div>
        </div>
      )}
    </div>
  );
};

export default Demo;
