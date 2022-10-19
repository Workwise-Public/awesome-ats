import { ReduxState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { memo, useState } from "react";

export const Applicants = ({ stageId }: { stageId: number }) => {
  const applicants = useSelector(({ applicants }: ReduxState) =>
    applicants.filter((applicant) => applicant.current_stage_id === stageId)
  );

  const applicantsB = applicants.map(({ first_name, last_name, ...a }) => ({
    name: `${first_name} ${last_name}`,
    ...a,
  }));

  const stage = useSelector(({ stages }: ReduxState) => {
    return stages.filter((thisstage) => thisstage.id == stageId)[0];
  });

  const [opened, open] = useState(false);

  return (
    <div
      style={{
        border: "1px solid lightgray",
        borderRadius: "8px",
        color: "grey",
        padding: "20px",
      }}
    >
      <p style={{ fontSize: "16px", fontWeight: "bold" }}>{stage?.title}</p>

      {applicantsB.map((applicant, index) => (
        <Item key={index} applicant={applicant} stageId={stageId} />
      ))}
    </div>
  );
};

// Memo increase performance.
const Item = memo(
  ({
    applicant,
    stageId,
  }: {
    applicant: { name: string; description: string; id: number };
    stageId: number;
  }) => {
    const dispatch = useDispatch();
    const nextStep = (() => {
      switch (stageId) {
        case 1:
          return 2;
        case 2:
          return 3;
        case 3:
          return 4;
        default:
          return false;
      }
    })();
    return (
      <div
        style={{
          border: "1px solid lightgray",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <b>{applicant.name}</b>
        {/* Feature needed for allowing styling of an applicants description. */}
        {/* Ignore dangerouslySetInnerHTML because its a html prop and we use react */}
        <p dangerouslySetInnerHTML={{ __html: applicant.description }}></p>
        <button
          onClick={() =>
            dispatch({ type: "deleteApplicant", payload: applicant.id })
          }
        >
          Delete
        </button>{" "}
        {stageId !== 4 && stageId !== 5 && (
          <button
            onClick={() => {
              dispatch({
                type: "changeStage",
                payload: { id: applicant.id, newStageId: 5 },
              });
            }}
          >
            Reject
          </button>
        )}{" "}
        {nextStep && (
          <button
            onClick={() => {
              dispatch({
                type: "changeStage",
                payload: { id: applicant.id, newStageId: nextStep },
              });
            }}
          >
            Move to next step
          </button>
        )}
      </div>
    );
  }
);
