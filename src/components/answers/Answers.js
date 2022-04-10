import React, { useMemo, useState } from "react";
import "./Answers.css";
import MultipleAnswers from "./MultipleAnswers";
import BooleanAnswers from "./BooleanAnswers";
import { useDispatch, useSelector } from "react-redux";
import { shuffle, getRandomInt } from "../../common/utils";
import like from "../../common/like.gif";
import dislike from "../../common/dislike.gif";
import {
  setCorrectAnswerIndex,
  incrementQuestionIndex,
  setTimer,
} from "../../store/reducers/questionsReducer";
import { setPlayerScore } from "../../store/reducers/usersReducer";
import PopUp from "../../common/PopUp";

const Answers = ({ incorrectAnswers, correctAnswer, type }) => {
  const [showSuccessGif, setShowSuccessGif] = useState(false);
  const [showWrongGif, setShowWrongGif] = useState(false);
  let questionIndex = useSelector(
    (state) => state.questionsReducer.questionIndex
  );

  let timer = useSelector((state) => state.questionsReducer.timer);
  let correctAnswerIndex = useSelector(
    (state) => state.questionsReducer.correctAnswerIndex
  );
  const dispatch = useDispatch();

  const checkAnswer = (index) => {
    if (index === correctAnswerIndex) {
      dispatch(setPlayerScore(timer));
      timer = null;
      setShowSuccessGif(true);
      setTimeout(() => {
        setShowSuccessGif(false);
      }, 1500);
      // alert("Congratulations");
    } else {
      setShowWrongGif(true);
      setTimeout(() => {
        setShowWrongGif(false);
      }, 1500);
      // alert("Wrong Answer");
    }
    dispatch(setTimer(31));
    dispatch(incrementQuestionIndex());
  };
  let ans = useMemo(() => {
    let answers = [...incorrectAnswers];
    correctAnswerIndex = getRandomInt(incorrectAnswers.length + 1);
    dispatch(setCorrectAnswerIndex(correctAnswerIndex));
    if (type === "multiple") {
      shuffle(answers);
    }
    answers.splice(correctAnswerIndex, 0, correctAnswer);

    if (type === "multiple")
      return (
        <MultipleAnswers
          correctAnswerIndex={correctAnswerIndex}
          answers={answers}
          checkAnswerHandler={checkAnswer}
        />
      );
    return (
      <BooleanAnswers answers={answers} checkAnswerHandler={checkAnswer} />
    );
  }, [questionIndex]);

  return (
    <div className="displayAnswers">
      <div>{ans}</div>
      {showWrongGif && (
        <PopUp
          closePopUp={setShowWrongGif}
          component={
            <img src={dislike} alt="dislike" style={{ width: "500px" }} />
          }
        />
      )}

      {showSuccessGif && (
        <PopUp
          closePopUp={setShowSuccessGif}
          component={<img src={like} alt="like" style={{ width: "500px" }} />}
        />
      )}
    </div>
  );
};

export default Answers;
