import { ReduxState } from "../store/store";
import { useSelector } from "react-redux";
import { memo, useState } from "react";

export const Applicants = ({ stageId }: { stageId: number }) => {
  const applicants = useSelector(({ applicants }: ReduxState) => applicants);

  const applicantsB = applicants.map(({ first_name, last_name, ...a }) => ({
    name: `${first_name} ${last_name}`,
    ...a,
  }));

  const stage = useSelector(({ stages }: ReduxState) => {
    return stages.find((thisstage) => thisstage.id == stageId);
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

      {applicantsB.map((applicant) => (
        <Item applicant={applicant} />
      ))}
    </div>
  );
};

// Memo increase performance.
const Item = memo(
  ({ applicant }: { applicant: { name: string; description: string } }) => {
    return (
      <div>
        <b>{applicant.name}</b>

        <p>{applicant.description}</p>
      </div>
    );
  }
);
