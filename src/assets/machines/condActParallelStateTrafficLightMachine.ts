import { createMachine } from "xstate";

export const condActParallelStateTrafficLightMachine = createMachine(
  {
    id: "condActParallelStateTrafficLightMachine",
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
        initial: "turnedOn", //we are here by default, initial substate is turnedOn
        states: {        
          turnedOn: {
            after: {
              7000: { //when we hit the button, we are changing to red.switching AND yellow.turnedOn
                target: "#yellow.turnedOn"
              }
            }
          },
          turnedOff: {},
          blinking: {}
        }
      },
      yellow: {
        id: "yellow",
        initial: "turnedOff",
        states: {
          turnedOn: {
            after: {
              3000: [
                { 
                  target: ["#green.turnedOn", "#yellow.turnedOff", "#red.turnedOff"], 
                  cond: "ifNextIsGreen", 
                  actions: "toggleNextIsGreen"
                },
                { 
                  target: ["#green.turnedOff", "#yellow.turnedOff", "#red.turnedOn"], 
                  actions: "toggleNextIsGreen" 
                }
              ]
            }
          },
          turnedOff: {},
          blinking: {
            after: {
              3000: {
                target: [ "#yellow.turnedOff", "#red.turnedOn" ],
                actions: "toggleNextIsGreen"
              }
            }
          }
        }
      },
      green: {
        id: "green",
        initial: "turnedOff",
        states: {
          turnedOn: {
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
          turnedOff: {},
          blinking: {
            after: {
              3000: {
                target: [ "#yellow.blinking", "#green.turnedOff" ]
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

export default condActParallelStateTrafficLightMachine;