import { createMachine } from "xstate";

export const contextActionsConditionsTrafficLightMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QGMD2A7ALmAHpggspgJYawDCGExJZAKgE4CGAZi8cgDLFQAWmAWSbJexdGAB0DSBOEkAbmADEOWJibZZLbAwAUAdgAMxgJRK0WXASKl0FKjVuxGrdlx78hIsZOkRZNooA2oYAuoigAA6osI4YESA4iABMyQBsEgCMABzGqckArJkALMmZ+gUANCAAnojFpRLZmQDMAJyGLQXp+m1t+gC+A9UW2HiEtHaU6NSTzsxsHNx8gsKi4hI1YAA226gA7gEKyqrqmqw6ui3GhmajVhNO07NOLovuK17rklu7B0fEYJhBLRWKTBJJBD6YqGCTXYrZa4lNItbJpZLVOoINJpYpZQqGNrFfTtaGZNJDEYYMbWObPOJ2N5uZaeNY+TY7PaHOSAk5qDSSC5gPTXUzmakPGxkelzJlLDyrbwbX5cgHBTLhJAgUEMiGIXr6CTJPptbIFQxFNL6QqY-UFCTFXGFQptFEFfTZbKUkD3cZSqYOWULZkKr7slX-ABG2zEAGsxFAVPzztphVcbncJX66YHXsH5Z82crOVGY+h4+goCFNVEYrqtZDzckJH1zUVUh0Ki1bQhkvpMg6WqizUTih02slvb7aU9c-R8x9WUrJFBpGB0GrlAAlACiAEUAKo7gDKdAA+nQAPJngDq+E4AGlqyC6+CG4hMskYRJDEZP61cXaHsCmJH8SQ6ApEU9IxiinLMZ2lOdGQXFlFW+CRVzAddNyTM5BVTPQjDFadHkQmYGXmVwCyXdDMOwnkgRrbVX1sPUEE-AoWgkCockMK1DE9Ike2NbIWwKfpjEyNoWhyT04MsbNZ3IoMqMXND2TojdozjBNcIFLRLlFW5xQUhCA2UvNVNQsMNk0iRtPLBNny1HU31ASFUgyXjDHyIpSnKKpakQZoHTHVtUndcoiSGYYQHQVAIDgBISP9ewLPnKzQyLMAXzBVj3wQABaL8e0KnI8RaL8cWNIdzWyNp5JpUjzJeDL3ms7KpEgXL63clJimElo8TaTJzSk40PWklpGslHN0uQzLC2XLr-AYnKXJY+ICutHsGgHa12lKTt6oaQZYpSubWoW9qsuWvwJDENaercxJ9QxIKEFRLjkiHUcClxFEzqpUzmrSq7KJupb0PuhyKygZ78r6qF3qxSq8WhVE0gnAKZIKGbFLI8G5TUmyfhLfYEa2pHaqaUafPq-R9DSTjAqxHIuNNYdugaK1UXxsywYo4mOuWiNuUCdbazyqnXs+xFaabBmmZZ3bin2n6iWNX8TuJfnQZlSzIZo8NyYe9Ano26X0DYrGBxRYw0T7SrMgtYTpKNBEOkKSDeYa874P1pCIZDKGTb+Q5YYTSnrYKr6Ffp-pla6N3voRNEYX+6E+j11KDbakPjdstcY6l3rZZdoojR+mSPStF3DEyUrXSaaFmdxc0fKKHPLqFlDbto4vN2jtiXb6Kuh3KNF+0k4DySNTpsg9bJiiGmFYP9kHc6D4X+40wfHol4eCsyVpRMgh3yT6MKe1RNoJFxerrnRZmYWmjemq3+bg+o9Si6wrSyxwyPkjZEeJ0jJE9NkDsOQSofUKnfUojpHQdyHGkZeXoYpAA */
    id: "contextActionsConditionsTrafficLightMachine",
    initial: "red",
    predictableActionArguments: true,
    preserveActionOrder: true,
    context: {
      nextIsGreen: true
    },
    type: "parallel",
    states: {
      red: {
        id: "red",
        initial: "active",
        states: {        
          active: {
            after: {
              7000: {
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