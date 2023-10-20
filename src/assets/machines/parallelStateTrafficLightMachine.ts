import { createMachine } from "xstate";

export const parallelStateTrafficLightMachine = createMachine(
  {
    id: "blinkingTrafficLightMachine",
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
            on: {
              SWITCH_LIGHTS: { //when we hit the button, we are changing to red.switching AND yellow.turnedOn
                target: "#yellow.turnedOn" 
              }
            }
          },
          turnedOff: {}
        }
      },
      yellow: {
        id: "yellow",
        initial: "turnedOff",
        states: {
          turnedOn: {
            on: {
              SWITCH_LIGHTS: [
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
          turnedOff: {}
        }
      },
      green: {
        id: "green",
        initial: "turnedOff",
        states: {
          turnedOn: {
            on: {
              SWITCH_LIGHTS: {
                target: [ "#yellow.turnedOn", "#green.turnedOff" ]
              }
            }
          },
          turnedOff: {}
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

export default parallelStateTrafficLightMachine;