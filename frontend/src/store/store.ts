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
}

function stateReducer(state = { stages: [], applicants: [] }, action: any) {
  switch (action.type) {
    case "loadApplications":
      return { ...state, applicants: [] };
    case "loadStages":
      return { ...state, stages: [] };
    default:
      return state;
  }
}

export var store = createStore(stateReducer);
