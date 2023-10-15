import { createMachine } from "xstate";

export const trafficLightMachine = createMachine({
  id: 'trafficLight',
  initial: 'red',
  states: {
    
  }
})