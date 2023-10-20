// import React from "react";
import ReactDOM from "react-dom/client";
// import CheckBaseTrafficLight from "./assets/components/CheckBaseTrafficLight";
// import BaseTrafficLight from "./assets/components/BaseTrafficLight.tsx";
import ParallelStateTrafficLight from "./assets/components/ParallelStateTrafficLight.tsx";
// import BlinkingTrafficLight from "./assets/components/BlinkingTrafficLight.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="grid grid-flow-col">
    {/* <CheckBaseTrafficLight /> */}
    {/* <BaseTrafficLight /> */}
    <ParallelStateTrafficLight />
    {/* <BlinkingTrafficLight /> */}
  </div>
);
