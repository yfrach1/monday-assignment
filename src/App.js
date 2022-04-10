import React from "react";
import "animate.css";
import UserSwitch from "./components/navigation/UserSwitch";
const App = (props) => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <UserSwitch />
    </div>
  );
};

export default App;
