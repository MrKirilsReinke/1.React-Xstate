import { createMachine } from "xstate";

const pedestrianStates = {
  id: "pedestrian",
  initial: "walk",
  states: {
    walk: {
      on: {
        SWITCH_LIGHT: { target: "wait" }
      }
    },
    wait: {
      on: {
        SWITCH_LIGHT: { target: "walk"}
      }
    }
  }
};

export const hierarchicalBaseTrafficLightMachine = createMachine({
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
      },
      ...pedestrianStates
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

export default hierarchicalBaseTrafficLightMachine;