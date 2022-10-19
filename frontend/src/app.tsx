import React from "react";
import { connect } from "react-redux";
import { Applicants } from "./components/applicants";
import { ReduxState } from "./store/store";
import { howUserBehaved } from "./tracking";

// This component must be a class because we need to run code when component will unmount
class App extends React.Component {
  componentWillUnmount(): void {
    howUserBehaved();
  }

  render(): React.ReactNode {
    return (
      <>
        <h1>Awesome Applicant Tracking System</h1>
        {/* @ts-ignore */}
        {this.props.stages.map((stage, index) => (
          // Key is needed because react does not work well. Maybe they will fix it in next version.
          <React.Fragment key={index}>
            <Applicants stageId={stage.id} />
          </React.Fragment>
        ))}
      </>
    );
  }
}

const SecondApp = connect((state: ReduxState) => ({
  stages: state.stages,
}))(App);

export default SecondApp;
