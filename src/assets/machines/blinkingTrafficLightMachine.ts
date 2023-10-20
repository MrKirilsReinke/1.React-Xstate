import { createMachine } from "xstate";

export const blinkingTrafficLightMachine = createMachine(
  {
    id: "blinkingTrafficLightMachine",
    initial: "red", //initial state is red
    predictableActionArguments: true,
    preserveActionOrder: true,
    type: "parallel",
    states: {
      red: {
        id: "red",
        initial: "turnedOn", //we are here by default, initial substate is turnedOn
        states: {        
          turnedOn: {
            on: {
              SWITCH_LIGHTS: { //when we hit the button, we are changing to red.switching AND yellow.turnedOn
                target: ["switching", "#yellow.turnedOn" ]
              }
            }
          },
          switching:{
            after: {
              2000: { //in 2 seconds, red goes to red.turnedOff, yellow is turnedOff and green is turnedOn
                target: ["turnedOff", "#yellow.turnedOff", "#green.turnedOn"]
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
          turnedOn: {},
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
                target: ["switching", "#yellow.turnedOn" ]
              }
            }
          },
          switching:{
            after: {
              2000: {
                target: ["turnedOff", "#yellow.turnedOff", "#red.turnedOn"]
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
      startBlinking: (context, event) => {
        console.log("green light startBlinking");
      },
      stopBlinking: (context, event) => {
        console.log("green light stopBlinking");
      }
    }
  }
);

export default blinkingTrafficLightMachine;