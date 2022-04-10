import React from "react";
import "./PopUp.css";
const PopUp = ({ component, closePopUp }) => {
  return (
    <div
      onClick={() => closePopUp(false)}
      className="pop_up animate__animated animate__fadeIn"
    >
      {component}
    </div>
  );
};

export default PopUp;
