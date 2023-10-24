import { createMachine } from "xstate";

export const contextActionsConditionsTrafficLightMachine = createMachine(
  {
    id: "contextActionsConditionsTrafficLightMachine",
    initial: "red", //initial state is red
    predictableActionArguments: true,
    preserveActionOrder: true,
    context: {
      nextIsGreen: true
    },
    type: "parallel",
    states: {
      red: {
        id: "red",
        initial: "active", //we are here by default, initial substate is turnedOn
        states: {        
          active: {
            after: {
              7000: { //when we hit the button, we are changing to red.switching AND yellow.turnedOn
                target: "#yellow.active"
              }
            }
          },
          inactive: {},
          blinking: {}
        }
      },
      yellow: {
        id: "yellow",
        initial: "inactive",
        states: {
          active: {
            after: {
              3000: [
                { 
                  target: ["#green.active", "#yellow.inactive", "#red.inactive"], 
                  cond: "ifNextIsGreen", 
                  actions: "toggleNextIsGreen"
                },
                { 
                  target: ["#green.inactive", "#yellow.inactive", "#red.active"], 
                  actions: "toggleNextIsGreen" 
                }
              ]
            }
          },
          inactive: {},
          blinking: {
            after: {
              3000: {
                target: [ "#yellow.inactive", "#red.active" ],
                actions: "toggleNextIsGreen"
              }
            }
          }
        }
      },
      green: {
        id: "green",
        initial: "inactive",
        states: {
          active: {
            after: {
              7000: {
                target: [ "#green.blinking" ]
              }
            },
            on: {
              REQUEST_TO_WALK: {
                target: [ "#green.blinking" ]
              }
            }
          },
          inactive: {},
          blinking: {
            after: {
              3000: {
                target: [ "#yellow.blinking", "#green.inactive" ]
              }
            }
          }
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
      ifNextIsGreen: (context) => {
        return context.nextIsGreen;
      }
    }
  }
);

export default contextActionsConditionsTrafficLightMachine;