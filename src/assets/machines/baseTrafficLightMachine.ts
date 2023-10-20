import { createMachine } from "xstate";

export const baseTrafficLightMachine = createMachine({
  id: "baseTrafficLightMachine",
  initial: "red",
  predictableActionArguments: true,
  preserveActionOrder: true,
  states: {
    red: {
      on: {
        SWITCH_LIGHT: "yellow"
      }
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

export default baseTrafficLightMachine;