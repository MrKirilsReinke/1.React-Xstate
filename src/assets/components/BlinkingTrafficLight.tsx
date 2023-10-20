import { useMachine } from "@xstate/react";
import blinkingTrafficLightMachine from "../machines/blinkingTrafficLightMachine";

function BlinkingTrafficLight() {
  const [current, send] = useMachine(blinkingTrafficLightMachine, {
    devTools: true
  });

  return (
    <div className="grid grid-flow-row gap-5">
      <div className="bg-neutral-800 w-44 h-[400px] rounded-3xl relative border-solid border-4 border-neutral-700 m-auto linear-gradient 
      before:content-[''] before:bg-neutral-800 before:w-44 before:h-40 before:m-auto before:absolute before:right-1/2 before:translate-x-1/2 before:top-[-20px] before:rounded-full before:z-[-1] radial-gradient-before
      after:content-[''] after:bg-neutral-800 after:w-12 after:h-[500px] after:ml-16 after:absolute after:top-[150px] after:z-[-1] linear-gradient-after"
      >
        <div className="bg-transparent w-45 h-0 absolute top-5 left-[-34px] border-x-[30px] border-t-[90px] border-x-transparent border-t-black rounded-lg border-solid z-[-1]"></div>
        <div className="bg-transparent w-45 h-0 absolute top-[140px] left-[-34px] border-x-[30px] border-t-[90px] border-x-transparent border-t-black rounded-lg z-[-1]"></div>
        <div className="bg-transparent w-45 h-0 absolute top-[260px] left-[-34px] border-x-[30px] border-t-[90px] border-x-transparent border-t-black rounded-lg z-[-1]"></div>
        <div className="bg-transparent w-45 h-0 absolute top-5 right-[-34px] border-x-[30px] border-t-[90px] border-x-transparent border-t-black rounded-lg border-solid z-[-1]"></div>
        <div className="bg-transparent w-45 h-0 absolute top-[140px] right-[-34px] border-x-[30px] border-t-[90px] border-x-transparent border-t-black rounded-lg z-[-1]"></div>
        <div className="bg-transparent w-45 h-0 absolute top-[260px] right-[-34px] border-x-[30px] border-t-[90px] border-x-transparent border-t-black rounded-lg z-[-1]"></div>
        <div className={`bg-red-500 w-[100px] h-[100px] rounded-full absolute top-5 left-9 border-dotted border-2 border-red-500 bg-shadow-red bg-size-5 radial-gradient-brown ${["red.turnedOn", "red.switching"].some(current.matches) ? "opacity-100" : "opacity-10"}`}></div>
        <div className={`bg-yellow-400 w-[100px] h-[100px] rounded-full absolute top-[145px] left-9 border-dotted border-2 border-yellow-400 bg-shadow-yellow bg-size-5 radial-gradient-orange ${current.matches("yellow.turnedOn") ? "opacity-100" : "opacity-10"}`}></div>
        <div className={`bg-green-600 w-[100px] h-[100px] rounded-full absolute top-[270px] left-9 border-dotted border-2 border-green-600 bg-shadow-green bg-size-5 radial-gradient-lime ${["green.turnedOn", "green.switching"].some(current.matches) ? "opacity-100" : "opacity-10"}`}></div>
      </div>
      <button onClick={() => send("SWITCH_LIGHTS")}>
        Change light
      </button>
    </div>
  );
}

export default BlinkingTrafficLight;
