import React from "react";
import mondayIcon from "./mondayIcon2.svg";
import ClientRoutes from "../components/navigation/Routes";
import { useHistory } from "react-router-dom";

const Monday = () => {
  const history = useHistory();

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        zIndex: 1,
      }}
    >
      <img
        onClick={() => history.push(ClientRoutes.User.main)}
        src={mondayIcon}
        alt="mondayIcon"
        style={{
          position: "absolute",
          top: "0",
          bottom: "0",
          right: "0",
          left: "0",
          width: "200px",
          height: "100px",
          margin: "0 auto",
        }}
      />
    </div>
  );
};

export default Monday;
