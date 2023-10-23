import { createMachine } from "xstate";

export const delayedTrafficLightMachine = createMachine({
  id: "delayedTrafficLightMachine",
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
          after: {
            2000: {
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
          after: {
            2000: {
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
          after: {
            2000: {
              target: ["#red.active", "#green.inactive"]
            }
          }
        },
        inactive: {}
      }

    }
  }
});

export default delayedTrafficLightMachine;