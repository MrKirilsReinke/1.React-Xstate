import { createMachine } from "xstate";

export const delayedTrafficLightMachine = createMachine({
  id: "delayedTrafficLightMachine",
  initial: "red",
  predictableActionArguments: true,
  preserveActionOrder: true,
  states: {
    red: {
      after: {
        7000: "yellow"
      }
    },
    yellow: {
      after: {
        3000: "green"
      }
    },
    green: {
      on: {
        7000: "red"
      }
    }
  }
});

export default delayedTrafficLightMachine;