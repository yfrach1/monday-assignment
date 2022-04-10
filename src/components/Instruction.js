import React from "react";
import "./SetUserName.css";
const SetUserName = () => {
  return (
    <div
      style={{
        background: "#f2f2f2",
        padding: "30px 20px",
        width: "80%",
        margin: "0 auto",
        borderRadius: "10px",
      }}
    >
      <h1>
        This is uniqe trivia game and the winner may be hired on Monday so try
        your best to succsed!
      </h1>
      <div style={{ marginBottom: "10px" }}>
        you will face 15 randomly questions, start with easy and move on to
        medium and hard questions. dont worry, you will have some help ;)
      </div>
      <div style={{ marginBottom: "10px" }}>
        {" "}
        50/50 button - will cut 2 answers and leave you with 2 answer.
      </div>
      <div style={{ marginBottom: "10px" }}>
        skipQuestion button - will give move on to the next question.
        <div />
        <div style={{ marginBottom: "10px" }}>
          the score will be result of correct answers and depends on how much
          fast you are so dont waste you time.
        </div>
        <div style={{ marginBottom: "10px" }}>
          you will have each button only one time use until question 10. for the
          last 5 question (hard) you will have new buttons that i hope will serv
          you well. be ready to start your journy and be part of Monday. GOOD
          LUCK.
        </div>
      </div>
    </div>
  );
};

export default SetUserName;
