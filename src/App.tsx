import { useMachine } from "@xstate/react";
import blinkingTrafficLightMachine from "./blinkingTrafficLightMachine";
import "./App.css";

function App() {
  const [current, send] = useMachine(blinkingTrafficLightMachine);

  return (
    <>
      {/* <div className="trafficlight">
        <div className="protector"></div>
        <div className="protector"></div>
        <div className="protector"></div>
        <div className={current.matches("red") ? "red" : ""}></div>
        <div className={current.matches("yellow") ? "yellow" : ""}></div>
        <div className={current.matches("green") ? "green" : ""}></div>
      </div> */}

      <div className="bg-neutral-800 w-44 h-96 rounded-3xl relative border-solid border-4 border-neutral-700 m-auto linear-gradient 
      before:content-[''] before:bg-neutral-800 before:w-44 before:h-40 before:m-auto before:absolute before:right-1/2 before:translate-x-1/2 before:top-[-20px] before:rounded-full before:z-[-1] radial-gradient-before
      after:content-[''] after:bg-neutral-800 after:w-12 after:h-[500px] after:ml-16 after:absolute after:top-[150px] after:z-[-1] linear-gradient-after"
      >
        <div className="bg-transparent w-45 h-0 absolute top-5 left-[-34px] border-x-[30px] border-t-[90px] border-x-transparent border-t-black rounded-lg border-solid z-[-1]"></div>
        <div className="bg-transparent w-45 h-0 absolute top-[140px] left-[-34px] border-x-[30px] border-t-[90px] border-x-transparent border-t-black rounded-lg z-[-1]"></div>
        <div className="bg-transparent w-45 h-0 absolute top-[260px] left-[-34px] border-x-[30px] border-t-[90px] border-x-transparent border-t-black rounded-lg z-[-1]"></div>
        <div className="bg-transparent w-45 h-0 absolute top-5 right-[-34px] border-x-[30px] border-t-[90px] border-x-transparent border-t-black rounded-lg border-solid z-[-1]"></div>
        <div className="bg-transparent w-45 h-0 absolute top-[140px] right-[-34px] border-x-[30px] border-t-[90px] border-x-transparent border-t-black rounded-lg z-[-1]"></div>
        <div className="bg-transparent w-45 h-0 absolute top-[260px] right-[-34px] border-x-[30px] border-t-[90px] border-x-transparent border-t-black rounded-lg z-[-1]"></div>
      </div>

      {/* <button onClick={() => send("TIMER")}>
        Change light
      </button> */}
      {/* <button onClick={() => console.log("info")}>
        Log info
      </button> */}
    </>
  );
}

export default App;
