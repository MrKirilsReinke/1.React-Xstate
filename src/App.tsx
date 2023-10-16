import { useMachine } from "@xstate/react";
import trafficLightMachine from "./trafficLightMachine";
import "./App.css";

function App() {
  const [current, send] = useMachine(trafficLightMachine);

  return (
    <>
      <div className="trafficlight">
        <div className="protector"></div>
        <div className="protector"></div>
        <div className="protector"></div>
        <div className={current.matches("red") ? "red" : ""}></div>
        <div className={current.matches("yellow") ? "yellow" : ""}></div>
        <div className={current.matches("green") ? "green" : ""}></div>
      </div>

      <button onClick={() => send("TIMER")}>
        Change light
      </button>
    </>
  );
}

export default App;
