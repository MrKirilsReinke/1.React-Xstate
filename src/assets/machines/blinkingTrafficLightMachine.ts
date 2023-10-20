import { createMachine } from "xstate";

export const blinkingTrafficLightMachine = createMachine(
  {
    id: "blinkingTrafficLightMachine",
    predictableActionArguments: true,
    initial: "red",
    states: {
      red: {
        on: {
          TIMER: { target: "yellow" }
        }
      },
      yellow: {
        on: {
          TIMER: { target: "green" }
        }
      },
      green: {
        on: {
          TIMER: {
            target: "blinkingGreen"
            // actions: ["startBlinking", "stopBlinking"]
          }
        }
      },
      blinkingGreen: {
        on: {
          TIMER: { target: "red" }
        },
        entry: ["startBlinking"],
        exit: ["stopBlinking"]
      }
    }
  },
  {
    actions: {
      startBlinking: (context, event) => {
        console.log("green light startBlinking");
      },
      stopBlinking: (context, event) => {
        console.log("green light stopBlinking");
      }
    }
  }
);

export default blinkingTrafficLightMachine;