import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerName: null,
  playerScore: 0,
  leaderboardData: [],
};

const _setPlayerName = (state, action) => {
  state.playerName = action.payload;
};

const _setPlayerScore = (state, action) => {
  state.playerScore += action.payload;
};
const _updateLeaderboard = (state) => {
  let tempLeaderboardData = [...state.leaderboardData];
  tempLeaderboardData.push({
    name: state.playerName,
    score: ((state.playerScore * 100) / 450).toFixed(0),
  });
  state.leaderboardData = tempLeaderboardData;
};

const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    setPlayerName_key: _setPlayerName,
    setPlayerScore_key: _setPlayerScore,
    updateLeaderboard_key: _updateLeaderboard,
  },
});

const { reducer, actions } = users;

export const { setPlayerName_key, setPlayerScore_key, updateLeaderboard_key } =
  actions;

export default reducer;

export const setPlayerName = (name) => {
  return async (dispatch) => {
    return dispatch(setPlayerName_key(name));
  };
};

export const setPlayerScore = (score) => {
  return async (dispatch) => {
    return dispatch(setPlayerScore_key(score));
  };
};

export const updateLeaderboard = (obj) => {
  return async (dispatch) => {
    return dispatch(updateLeaderboard_key(obj));
  };
};
