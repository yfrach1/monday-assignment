import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuestionIndex,
  change5050Status,
  changeSkipQuestionStatus,
  setTimer,
} from "../store/reducers/questionsReducer";
import { setPlayerScore } from "../store/reducers/usersReducer";
import "./HelpToolbar.css";
import SkipQuestion from "./buttons/SkipQuestion";
import CutAnswersByHalf from "./buttons/CutAnswersByHalf";

const HelpToolbar = ({ type }) => {
  const is5050Shown = useSelector(
    (state) => state.questionsReducer.is5050Shown
  );
  const isSkipQuestionUsed = useSelector(
    (state) => state.questionsReducer.isSkipQuestionUsed
  );
  const timer = useSelector((state) => state.questionsReducer.timer);
  const dispatch = useDispatch();

  const skipQuestionHandler = () => {
    dispatch(setPlayerScore(timer));
    dispatch(incrementQuestionIndex());
    dispatch(changeSkipQuestionStatus());
    dispatch(setTimer(30));
  };
  const cutAnswersByHalfHandler = () => {
    dispatch(change5050Status());
  };
  let isMultiple = false;
  if (type === "multiple") {
    isMultiple = true;
  }
  return (
    <div className="displayHelp">
      {is5050Shown && isMultiple && (
        <CutAnswersByHalf onClickcutAnswersByHalf={cutAnswersByHalfHandler} />
      )}
      {!isSkipQuestionUsed && (
        <SkipQuestion onClickskipQuestion={skipQuestionHandler} />
      )}
    </div>
  );
};

export default HelpToolbar;
