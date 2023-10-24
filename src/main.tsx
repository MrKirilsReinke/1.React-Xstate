// import React from "react";
import ReactDOM from "react-dom/client";
// import BaseTrafficLight from "./assets/components/BaseTrafficLight.tsx";
// import HierarchicalBaseTrafficLight from "./assets/components/HierarchicalBaseTrafficLight";
// import ParallelStateTrafficLight from "./assets/components/ParallelStateTrafficLight.tsx";
import CondActParallelStateTrafficLightMachine from "./assets/components/CondActParallelStateTrafficLightMachine.tsx";
// import PedestrianTrafficLight from "./assets/components/PedestrianTrafficLight";
// import BlinkingTrafficLight from "./assets/components/BlinkingTrafficLight.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div>
    {/* <BaseTrafficLight /> */}
    {/* <HierarchicalBaseTrafficLight /> */}
    {/* <DelayedTrafficLight /> */}
    {/* <ParallelStateTrafficLight /> */}
    <CondActParallelStateTrafficLightMachine />
    {/* <BlinkingTrafficLight /> */}
  </div>
);
