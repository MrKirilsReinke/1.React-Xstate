import { createMachine } from "xstate";

const pedestrianStates = {
  id: "pedestrian",
  initial: "walk",
  states: {
    walk: {}
  }
};

export const hierarchicalBaseTrafficLightMachine = createMachine({
  id: "hierarchicalBaseTrafficLightMachine",
  initial: "red",
  predictableActionArguments: true,
  preserveActionOrder: true,
  states: {
    red: {
      on: {
        SWITCH_LIGHT: "yellow"
      },
      ...pedestrianStates
    },
    yellow: {
      on: {
        SWITCH_LIGHT: "green"
      }
    },
    green: {
      on: {
        SWITCH_LIGHT: "red"
      }
    }
  }
});

export default hierarchicalBaseTrafficLightMachine;