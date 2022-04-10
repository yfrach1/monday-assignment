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
        This is uniqe trivia game and the winner maight get hired to Monday so
        try your best to win!
      </h1>
      <div style={{ marginBottom: "10px" }}>
        You will face 15 random questions, starting from easy and moving to
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
          The score will be calculated by how fast you answer the questions and
          the amount of correct answers.
        </div>
        <div style={{ marginBottom: "10px" }}>
          You will ba able to use each help button only one time until question
          number 10.For the last 5 question (hard) you will have new buttons
          that i hope will serve you well. Be ready to start your journey and be
          part of Monday. GOOD LUCK.
        </div>
      </div>
    </div>
  );
};

export default SetUserName;
