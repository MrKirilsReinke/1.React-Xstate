import { createMachine } from "xstate";

export const checkBaseTrafficLightMachine = createMachine({
  id: "trafficLight",
  initial: "red",
  predictableActionArguments: true,
  preserveActionOrder: true,
  context: {
    nextIsGreen: true
  },
  states: {
    red: {
      on: {
        TIMER: "yellow"
      }
    },
    yellow: {
      on: {
        TIMER: [
          { target: "green", cond: "nextIsGreen", actions: "toggleNextIsGreen" },
          { target: "red", actions: "toggleNextIsGreen" }
        ]
      }
    },
    green: {
      on: {
        TIMER: "yellow"
      }
    }
  }
},
{
  actions: {
    toggleNextIsGreen: (context) => {
      context.nextIsGreen = !context.nextIsGreen;
    }
  },
  guards: {
    nextIsGreen: (context) => {
      return context.nextIsGreen;
    }
  }
});

export default checkBaseTrafficLightMachine;