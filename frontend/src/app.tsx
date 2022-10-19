import React from "react";
import { connect } from "react-redux";
import { Applicants } from "./components/applicants";
import { ReduxState } from "./store/store";
import { howUserBehaved } from "./tracking";
import axios from "axios";
import { DATABASE_API_URL } from "./api/api";

// This component must be a class because we need to run code when component will unmount
class App extends React.Component {
  componentWillUnmount(): void {
    howUserBehaved();
  }
  componentDidMount(): void {
    axios.get(`${DATABASE_API_URL}/applicants`).then(({ data: res }) => {
      // @ts-ignore
      this.props.dispatch({
        type: "loadApplicants",
        payload: res,
      });
    });

    axios.get(`${DATABASE_API_URL}/stages`).then(({ data: res }) => {
      // @ts-ignore
      this.props.dispatch({
        type: "loadStages",
        payload: res,
      });
    });
  }

  render(): React.ReactNode {
    return (
      <>
        <h1>Awesome Applicant Tracking System</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          {/* @ts-ignore */}
          {this.props.stages.map((stage, index) => (
            // Key is needed because react does not work well. Maybe they will fix it in next version.
            <React.Fragment key={index}>
              <Applicants stageId={stage.id} />
            </React.Fragment>
          ))}
        </div>
      </>
    );
  }
}

const SecondApp = connect((state: ReduxState) => ({
  stages: state.stages,
}))(App);

export default SecondApp;
