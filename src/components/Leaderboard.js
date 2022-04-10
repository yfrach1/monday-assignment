import React from "react";
import { useSelector } from "react-redux";
import Monday from "../common/Monday";
import mondayIcon from "../common/mondayIcon.svg";
const Leaderboard = () => {
  const leaderboardData = useSelector(
    (state) => state.usersReducer.leaderboardData
  );
  let arr = [...leaderboardData];

  arr.sort(function (a, b) {
    return b.score - a.score;
  });
  //   let arr2 = [];
  let arr2 = arr.map((item, index) => {
    return (
      <div
        key={index}
        style={{
          background: "#f2f2f2",
          borderRadius: "5px",
          boxShadow:
            index === 0
              ? "0 2px 8px green, 0 -1px 8px red"
              : "0 2px 4px rgba(0,0,0,0.8)",
          padding: index === 0 ? "12px 20px" : "7px 12px",
          marginTop: "10px",
          position: "relative",
        }}
      >
        <div key={index}>{item.name + " " + item.score}</div>
        {index === 0 && (
          <img
            src={mondayIcon}
            alt="mondayIcon"
            style={{
              width: "28px",
              position: "absolute",
              left: "5px",
              top: "50%",
              transform: "translate(0,-50%)",
              zIndex: 1,
            }}
          />
        )}
      </div>
    );
  });
  //   for (let i = 0; i < arr.length; i++) {
  //     arr2.push(<div>{arr[i].name + " " + arr[i].score}</div>);
  //   }
  return (
    <>
      <Monday />

      <div
        style={{
          display: "flex",
          position: "relative",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          minHeight: "100vh",
          background:
            "linear-gradient(to top right, rgba(255, 255, 0, 0.1),rgba(0, 128, 0, 0.1),rgba(255, 0, 0, 0.1))",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "30px",
              fontWeight: "600",
              marginBottom: "30px",
            }}
          >
            Leaderboard
          </div>

          <div>{arr2}</div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
