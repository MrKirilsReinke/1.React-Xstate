// import React from "react";
import ReactDOM from "react-dom/client";
// import BaseTrafficLight from "./assets/components/BaseTrafficLight.tsx";
// import HierarchicalBaseTrafficLight from "./assets/components/HierarchicalBaseTrafficLight";
// import DelayedTrafficLight from "./assets/components/DelayedTrafficLight.tsx";
// import ParallelStateTrafficLight from "./assets/components/ParallelStateTrafficLight.tsx";
import ContextActionsConditionsTrafficLight from "./assets/components/contextActionsConditionsTrafficLight";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div>
    {/* <BaseTrafficLight /> */}
    {/* <HierarchicalBaseTrafficLight /> */}
    {/* <DelayedTrafficLight /> */}
    {/* <ParallelStateTrafficLight /> */}
    <ContextActionsConditionsTrafficLight />
  </div>
);
