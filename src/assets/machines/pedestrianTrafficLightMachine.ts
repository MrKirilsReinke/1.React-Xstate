import { createMachine } from "xstate";

// const pedestrianStates = {
//   id: "pedestrian",
//   initial: "walk",
//   states: {
//     walk: {
//       actions: "walking",
//       on: {
//         SWITCH_LIGHT: { target: "requestToWalk" }
//       }
//     },
//     requestToWalk: {}
//     // wait: {
//     //   on: {
//     //     SWITCH_LIGHT: { target: "walk"}
//     //   }
//     // }
//     // requestToWalk: {
//     //   on: {
//     //     SWITCH_LIGHT: { target: "walk" }
//     //   }
//     // }
//   }
// };

export const pedestrianTrafficLightMachine = createMachine(
  {
    id: "pedestrianTrafficLightMachine",
    initial: "red",
    predictableActionArguments: true,
    preserveActionOrder: true,
    type: "parallel",
    // context: {
    //   message: "I'm walking"
    // },
    states: {
      red: {
        id: "red",
        initial: "active",
        states: {
          active: {
            after: {
              5000: {
                target: ["#pedestrians.wait", "#yellow.active"]
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
                target: ["#pedestrians.wait", "#green.active", "#red.inactive", "#yellow.inactive"]
              }
            }
            // ...[pedestrianStates]
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
              5000: {
                target: ["#pedestrians.walk", "#red.active", "#green.inactive"]
              // actions: "walking"
              }
            }
          },
          inactive: {}
        }
      },
      pedestrians: {
        id: "pedestrians",
        initial: "wait",
        states: {
          wait: {
            on: {
              COUNTDOWN: {
                target: ["requestToWalk"]
              }
            }
          },
          requestToWalk: {
            on: {
              COUNTDOWN: {
                target: ["walk"]
              }
            }
          },
          walk: {}
        }
      }
    }
  }
  // {
  //   actions: {
  //     walking: (context) => {
  //       console.log(context.message);
  //     }
  //   }
  // }
);

export default pedestrianTrafficLightMachine;


// import { createMachine } from "xstate";

// const pedestrianStates = {
//   id: "pedestrian",
//   initial: "walk",
//   states: {
//     walk: {
//       actions: "walking",
//       on: {
//         SWITCH_LIGHT: { target: "requestToWalk" }
//       }
//     },
//     requestToWalk: {}
//     // wait: {
//     //   on: {
//     //     SWITCH_LIGHT: { target: "walk"}
//     //   }
//     // }
//     // requestToWalk: {
//     //   on: {
//     //     SWITCH_LIGHT: { target: "walk" }
//     //   }
//     // }
//   }
// };

// export const pedestrianTrafficLightMachine = createMachine(
//   {
//     id: "pedestrianTrafficLightMachine",
//     initial: "red",
//     predictableActionArguments: true,
//     preserveActionOrder: true,
//     type: "parallel",
//     // context: {
//     //   message: "I'm walking"
//     // },
//     states: {
//       red: {
//         id: "red",
//         initial: "active",
//         states: {
//           active: {
//             on: {
//               SWITCH_LIGHT: {
//                 target: ["#yellow.active"]
//               }
//             }
//           },
//           inactive: {}
//         }
//       },
//       yellow: {
//         id: "yellow",
//         initial: "inactive",
//         states: {
//           active: {
//             on: {
//               SWITCH_LIGHT: {
//                 target: ["#green.active", "#red.inactive", "#yellow.inactive"]
//               }
//             },
//             ...[pedestrianStates]
//           },
//           inactive: {}
//         }
//       },
//       green: {
//         id: "green",
//         initial: "inactive",
//         states: {
//           active: {
//             on: {
//               SWITCH_LIGHT: {
//                 target: ["#red.active", "#green.inactive"]
//               // actions: "walking"
//               }
//             }
//           },
//           inactive: {}
//         }

//       }
//     }
//   }
//   // {
//   //   actions: {
//   //     walking: (context) => {
//   //       console.log(context.message);
//   //     }
//   //   }
//   // }
// );

// export default pedestrianTrafficLightMachine;