import { createStore } from "redux";

export interface ReduxState {
  stages: { id: number; title: string }[];
  applicants: {
    id: number;
    current_stage_id: number;
    first_name: string;
    last_name: string;
    description: string;
  }[];
  lastStateUpdate: Date | null;
}

function stateReducer(
  state: ReduxState = {
    stages: [],
    applicants: [],
    lastStateUpdate: null,
  },
  action: any
) {
  switch (action.type) {
    case "loadApplicants":
      return {
        ...state,
        applicants: action.payload,
        lastStateUpdate: new Date(),
      };
    case "loadStages":
      return { ...state, stages: action.payload, lastStateUpdate: new Date() };
    default:
      return state;
  }
}

export var store = createStore(stateReducer);
