import { createMachine } from "xstate";

export const baseTrafficLightMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QCMCGswBUBOqBmeAlgMYAyhUAFgC4CyqxlhAdmAHTaQDEAygOoBJTAGEAEgH1SAgOKjMAbQAMAXUSgADgHtYhaoU3M1IAB6IAjAFYATGwDsAFkVOAbAE4LtgBwXPAZmcANCAAnohWijZmivaurs6Krma+DtYAvqlBaBg4+ERkFDT0jCzswWAANuWaAO68giISUrIKKkZaOnoGRqYI9la+bK62TuGKnq5WbrZBoQjhkdGx8YnJ9mkZIFlYuAQk5FR0DEysbFCcYMx1QmKSMnJKqkgg7br6hk89fQNDI07jk0MZohPGY2PYYrFvIpbDDnL57OkNsxNBA4EYtjldvkDkVjmA2tpXl0PogALSBEJkiyDWK0ul03zpTLoba5PYFQ7FE6cCAEjpvbqIPpAhCeWxg+xmZzOCzQib9ZwIjYYnZ5faFI4lNhlSo1PlE96gHq+MyeNj9JxJK2SpL2EXzNgWMwQ2yWZwOOGeJmbFmYtUc3Fas5gC76zqGkyIHyuMHxCLOSZWTxWKzTSmimOuSWe1yeNZWL6I1JAA */
  id: "baseTrafficLightMachine",
  initial: "red",
  predictableActionArguments: true,
  preserveActionOrder: true,
  states: {
    red: {
      on: {
        SWITCH_LIGHT: "yellow"
      }
    },
    yellow: {
      on: {
        SWITCH_LIGHT: "green"
      }
    },
    green: {
      on: {
        SWITCH_LIGHT: "red"
      }
    }
  }
});

export default baseTrafficLightMachine;