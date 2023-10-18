import { createMachine } from "xstate";

export const baseTrafficLightMachine = createMachine({
  id: "trafficLight",
  initial: "red",
  states: {
    red: {
      on: {
        TIMER: "yellow"
      }
    },
    yellow: {
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
});

export default baseTrafficLightMachine;