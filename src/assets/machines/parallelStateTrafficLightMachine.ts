import { createMachine } from "xstate";

export const parallelStateTrafficLight = createMachine(
  {
    id: "trafficLight",
    predictableActionArguments: true,
    initial: "red",
    context: {
      nextGreen: false,
      nextRed: false
    },
    states: {
      red: {
        on: {
          TIMER: "yellow"
        }
      },
      yellow: {
        always: [
          { target: "red", cond: "ifNextIsGreen" }
        ],
        on: {
          TIMER: "green"
        }
      },
      green: {
        on: {
          TIMER: "red"
        }
      }
    }
  },
  {
    guards: {
      ifNextIsGreen: (context, event) => {
        return context.nextGreen !== true; 
      },
      ifNextIsRed: (context, event) => {
        return context.nextRed === true; 
      } 
    }
  }
);

export default parallelStateTrafficLight;