import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementTimer } from "../../store/reducers/questionsReducer";

const CountDownClock = ({ timeEndHandler }) => {
  let dispatch = useDispatch();
  const timer = useSelector((state) => state.questionsReducer.timer);

  useEffect(() => {
    if (timer === 0) {
      timeEndHandler();
    }
  }, [timer]);

  useEffect(() => {
    const time = setInterval(() => {
      _setTimer();
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, []);

  const _setTimer = () => {
    dispatch(decrementTimer(timer - 1));
  };

  let uuu = useMemo(() => {
    return (
      <div
        style={{
          width: "200px",
          boxShadow: "0 2px 4px silver",
          height: "40px",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            width: `${(timer / 30) * 200}px`,
            height: "100%",
            borderRadius: "20px",
            // textAlign: "center",
            color: timer > 20 ? "white" : timer > 10 ? "black" : "white",
            fontWeight: "600",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "all 2000ms",
            background: timer > 20 ? "green" : timer > 10 ? "yellow" : "red",
          }}
        >
          {timer}s
        </div>
      </div>
    );
  }, [timer]);

  return <div>{uuu}</div>;
};
export default CountDownClock;
