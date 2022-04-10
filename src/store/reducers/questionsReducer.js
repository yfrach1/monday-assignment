import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getRandomInt } from "../../common/utils";

let numsOfQuestions = 5;
let maxResult = 50;
let url = "https://opentdb.com/api.php?amount=" + maxResult;
let difficultFilter = "&difficulty=";

const initialState = {
  questionIndex: 0,
  timer: 30,
  correctAnswerIndex: null,
  is5050Used: false,
  is5050Shown: true,
  isSkipQuestionUsed: false,
  loadingPage: false,
  questionsData: [],
};

const _incrementQuestionIndex = (state) => {
  state.questionIndex += 1;
  state.is5050Used = false;
};
const _setTimer = (state, action) => {
  state.timer = action.payload;
};

const _cleanState = (state, action) => {
  state.questionIndex = 0;
  state.timer = 30;
  state.correctAnswerIndex = null;
  state.is5050Used = false;
  state.is5050Shown = true;
  state.isSkipQuestionUsed = false;
  state.loadingPage = false;
  state.questionsData = [];
};

const _decrementTimer = (state) => {
  state.timer -= 1;
};

const _change5050Status = (state) => {
  state.is5050Used = true;
  state.is5050Shown = false;
};

const _changeIsUsed5050 = (state) => {
  state.is5050Used = false;
};

const _setCorrectAnswerIndex = (state, action) => {
  state.correctAnswerIndex = action.payload;
};

const _changeSkipQuestionStatus = (state) => {
  state.isSkipQuestionUsed = true;
};

const _setQuestionsData = (state, action) => {
  state.questionsData = action.payload;
  state.loadingPage = false;
};

const _loadingData = (state) => {
  state.loadingPage = true;
};

const _initialHelpButton = (state) => {
  state.is5050Used = false;
  state.is5050Shown = true;
  state.isSkipQuestionUsed = false;
};

const questions = createSlice({
  name: "questions",
  initialState, // same like initialState:initialState
  reducers: {
    incrementQuestionIndex_key: _incrementQuestionIndex,
    change5050_key: _change5050Status,
    setCorrectAnswerIndex_key: _setCorrectAnswerIndex,
    changeSkipQuestionStatus_key: _changeSkipQuestionStatus,
    setQuestionsData_key: _setQuestionsData,
    loadingData: _loadingData,
    setTimer_key: _setTimer,
    decrementTimer_key: _decrementTimer,
    initialHelpButton_key: _initialHelpButton,
    changeIsUsed5050_key: _changeIsUsed5050,
    cleanState_key: _cleanState,
  },
});

const { reducer, actions } = questions;

export const {
  incrementQuestionIndex_key,
  change5050_key,
  setCorrectAnswerIndex_key,
  changeSkipQuestionStatus_key,
  setQuestionsData_key,
  loadingData,
  setTimer_key,
  decrementTimer_key,
  initialHelpButton_key,
  changeIsUsed5050_key,
  cleanState_key,
} = actions;

export default reducer;

export const incrementQuestionIndex = () => {
  return async (dispatch) => {
    return dispatch(incrementQuestionIndex_key());
  };
};

export const change5050Status = () => {
  return async (dispatch) => {
    return dispatch(change5050_key());
  };
};

export const setCorrectAnswerIndex = (value) => {
  return async (dispatch) => {
    return dispatch(setCorrectAnswerIndex_key(value));
  };
};

export const changeSkipQuestionStatus = () => {
  return async (dispatch) => {
    return dispatch(changeSkipQuestionStatus_key());
  };
};

export const importQuestionsData = () => {
  return async (dispatch) => {
    dispatch(loadingData());
    let difficultLevel = ["easy", "medium", "hard"];
    let tempQuestionsArray = [];
    for (let i = 0; i < difficultLevel.length; i++) {
      const { data, error, status } = await axios.get(
        url + difficultFilter + difficultLevel[i]
      );
      if (status !== 200) {
        console.log(error);
      } else {
        let index;
        for (let i = 0; i < numsOfQuestions; i++) {
          index = getRandomInt(maxResult - i);
          tempQuestionsArray.push(data.results[index]);
          data.results.splice(index, 1);
        }
      }
    }
    dispatch(setQuestionsData_key(tempQuestionsArray));
  };
};

export const setTimer = (value) => {
  return async (dispatch) => {
    return dispatch(setTimer_key(value));
  };
};

export const decrementTimer = () => {
  return async (dispatch) => {
    return dispatch(decrementTimer_key());
  };
};

export const initialHelpButton = () => {
  return async (dispatch) => {
    return dispatch(initialHelpButton_key());
  };
};

export const changeIsUsed5050 = () => {
  return async (dispatch) => {
    return dispatch(changeIsUsed5050_key());
  };
};

export const cleanState = () => {
  return async (dispatch) => {
    return dispatch(cleanState_key());
  };
};
