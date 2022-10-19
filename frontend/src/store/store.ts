import { createStore } from "redux";
import { Applicants } from "../components/applicants";

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
    case "deleteApplicant":
      return {
        ...state,
        applicants: state.applicants.filter(
          (applicant) => applicant.id !== action.payload
        ),
      };
    case "changeStage":
      console.log(action.payload);
      const apl = state.applicants.find(
        (applicant) => applicant.id === action.payload.id
      );

      // var because we need to modify it later
      var new_state = {
        ...state,
        applicants: [
          ...state.applicants.filter(
            (applicant) => applicant.id !== action.payload.id
          ),
        ],
      };

      if (apl) {
        new_state = {
          ...state,
          applicants: [
            ...state.applicants.filter(
              (applicant) => applicant.id !== action.payload.id
            ),
            { ...apl, current_stage_id: action.payload.newStageId },
          ],
        };
      }

      return new_state;
    default:
      return state;
  }
}

export var store = createStore(stateReducer);
