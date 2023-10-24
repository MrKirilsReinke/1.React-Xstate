import { createMachine } from "xstate";

export const parallelStateTrafficLightMachine = createMachine({
  id: "parallelStateTrafficLightMachine",
  initial: "red",
  predictableActionArguments: true,
  preserveActionOrder: true,
  type: "parallel",
  states: {
    red: {
      id: "red",
      initial: "active",
      states: {
        active: {
          on: {
            SWITCH_LIGHT: {
              target: ["#yellow.active"]
            }
          }
        },
        inactive: {}
      }
    },
    yellow: {
      id: "yellow",
      initial: "inactive",
      states: {
        active: {
          on: {
            SWITCH_LIGHT: {
              target: ["#green.active", "#red.inactive", "#yellow.inactive"]
            }
          }
        },
        inactive: {}
      }
    },
    green: {
      id: "green",
      initial: "inactive",
      states: {
        active: {
          on: {
            SWITCH_LIGHT: {
              target: ["#red.active", "#green.inactive"]
            }
          }
        },
        inactive: {}
      }

    }
  }
});

export default parallelStateTrafficLightMachine;
