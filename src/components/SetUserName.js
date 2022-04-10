import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ClientRoutes from "./navigation/Routes";
import { useHistory } from "react-router-dom";

import { setPlayerName } from "../store/reducers/usersReducer";
import "./SetUserName.css";
import closePopUpSvg from "../common/closePopUp.svg";
const SetUserName = ({ closePopUp }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const submit = () => {
    if (name.length) {
      dispatch(setPlayerName(name));
      closePopUp(false);
      history.push(ClientRoutes.User.game);
    } else alert("name must be min 1 letter");
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="set_user_name_div animate__animated animate__fadeIn"
    >
      <img
        src={closePopUpSvg}
        alt={"closePopUpSvg"}
        style={{ width: "15px" }}
        className="closePosition"
        onClick={() => closePopUp(false)}
      />
      <div style={{ marginBottom: "20px" }}>Enter your name</div>
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
        type={"text"}
      />
      <div className="enter_name_div" onClick={() => submit()}>
        Let's Go
      </div>
    </div>
  );
};

export default SetUserName;
