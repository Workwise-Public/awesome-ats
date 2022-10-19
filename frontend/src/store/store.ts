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

function stateReducer(
  state: ReduxState = {
    stages: [{ id: 1, title: "asd" }],
    applicants: [
      {
        current_stage_id: 1,
        description: "",
        first_name: "",
        id: 1,
        last_name: "",
      },
    ],
  },
  action: any
) {
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
