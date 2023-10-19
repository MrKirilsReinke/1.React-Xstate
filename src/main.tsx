import React from "react";
import ReactDOM from "react-dom/client";
import BaseTrafficLight from "./assets/components/BaseTrafficLight.tsx";
import BlinkingTrafficLight from "./assets/components/BlinkingTrafficLight.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="grid grid-flow-col">
      <BaseTrafficLight />
      <BlinkingTrafficLight />
    </div>
  </React.StrictMode>
);
