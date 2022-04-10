import React, { useEffect, useState } from "react";
import "./Main.css";
import ClientRoutes from "./navigation/Routes";
import { useHistory } from "react-router-dom";
import SetUserName from "./SetUserName";
import PopUp from "../common/PopUp";
import medal from "../common/medal.svg";
import Monday from "../common/Monday";
import { useDispatch, useSelector } from "react-redux";
import { cleanState } from "../store/reducers/questionsReducer";
import Instruction from "./Instruction";

const Main = () => {
  const [showSetUserNamePopUp, setShowSetUserNamePopUp] = useState(false);
  const [showInstructionPopUp, setshowInstructionPopUp] = useState(false);
  const history = useHistory();
  const leaderboardData = useSelector(
    (state) => state.usersReducer.leaderboardData
  );
  console.log(leaderboardData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cleanState());
  });

  let arr = [...leaderboardData];

  arr.sort(function (a, b) {
    return b.score - a.score;
  });

  return (
    <>
      <Monday />
      <div
        className="buttonGroups"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(255, 255, 0, 0.1),rgba(0, 128, 0, 0.1),rgba(255, 0, 0, 0.1))",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: "30px auto",
          }}
        >
          <img src={medal} alt="medal" style={{ width: "50px" }} />
          <div style={{ textAlign: "center" }}>
            <div>First Place:</div>
            <div>{arr.length ? arr[0].name : "Maybe it will be you"}</div>
          </div>
          <img src={medal} alt="medal" style={{ width: "50px" }} />
        </div>
        <h1>Who wnat to work at Monday?</h1>
        <button
          className="generic_button"
          onClick={() => setShowSetUserNamePopUp(true)}
        >
          Start your journey
        </button>
        <button
          className="generic_button"
          onClick={() => history.push(ClientRoutes.User.demo)}
        >
          Demo
        </button>
        <button
          className="generic_button"
          onClick={() => setshowInstructionPopUp(true)}
        >
          Instruction
        </button>
        <button
          className="generic_button"
          onClick={() => history.push(ClientRoutes.User.leaderboard)}
        >
          Leaderboard
        </button>

        {showSetUserNamePopUp && (
          <PopUp
            closePopUp={setShowSetUserNamePopUp}
            component={<SetUserName closePopUp={setShowSetUserNamePopUp} />}
          />
        )}

        {showInstructionPopUp && (
          <PopUp
            closePopUp={setshowInstructionPopUp}
            component={<Instruction closePopUp={setshowInstructionPopUp} />}
          />
        )}
      </div>
    </>
  );
};

export default Main;
