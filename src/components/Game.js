import React, { useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuestionIndex,
  importQuestionsData,
  setTimer,
  initialHelpButton,
} from "../store/reducers/questionsReducer";
import { updateLeaderboard } from "../store/reducers/usersReducer";
import ClientRoutes from "./navigation/Routes";
import Container from "./Container";
import Monday from "../common/Monday";
import spinner from "../common/spinner.svg";
import PopUp from "../common/PopUp";

const Game = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const questionIndex = useSelector(
    (state) => state.questionsReducer.questionIndex
  );
  const loadingPage = useSelector(
    (state) => state.questionsReducer.loadingPage
  );
  const questionsData = useSelector(
    (state) => state.questionsReducer.questionsData
  );
  const playerName = useSelector((state) => state.usersReducer.playerName);
  const playerScore = useSelector((state) => state.usersReducer.playerScore);

  useEffect(() => {
    if (playerName === null) {
      history.push(ClientRoutes.User.main);
    } else dispatch(importQuestionsData());
  }, []);

  const questionTimeEndHandler = () => {
    dispatch(incrementQuestionIndex());
    dispatch(setTimer(31));
  };
  const setNewPlayerToLeaderboard = () => {
    dispatch(updateLeaderboard());
  };
  let displayedQuestion = useMemo(() => {
    if (questionIndex === questionsData.length && questionIndex !== 0) {
      return (
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
          <h3>your score is {((playerScore * 100) / 450).toFixed(0)}</h3>
          <div
            className="generic_button"
            onClick={() => {
              setNewPlayerToLeaderboard();
              history.push(ClientRoutes.User.main);
            }}
          >
            Back to HomePage
          </div>
        </div>
      );
    } else if (questionsData.length) {
      if (questionIndex === 9) {
        dispatch(initialHelpButton());
      }
      return (
        <Container
          type={questionsData[questionIndex].type}
          question={questionsData[questionIndex].question}
          correctAnswer={questionsData[questionIndex].correct_answer}
          incorrectAnswers={questionsData[questionIndex].incorrect_answers}
          timeEndHandler={questionTimeEndHandler}
          duration={30}
          difficulty={questionsData[questionIndex].difficulty}
          questionNumberByDifficulty={(questionIndex % 5) + 1}
          numOfQuestionByDifficulty={5}
        />
      );
    }
  }, [questionIndex, questionsData]);

  return (
    <div
      style={{
        background:
          "linear-gradient(to top right, rgba(255, 0, 0, 0.1),rgba(0, 128, 0, 0.1),rgba(255, 255, 0, 0.1))",
      }}
    >
      <Monday />
      <div>{displayedQuestion}</div>

      {loadingPage && (
        <PopUp
          closePopUp={() => console.log("wait")}
          component={<img src={spinner} style={{ width: "200px" }} />}
        />
      )}
    </div>
  );
};

export default Game;
