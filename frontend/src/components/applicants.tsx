import { ReduxState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { memo, useState } from "react";
import Modal from "react-modal";
const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "yourAppElement");
document.body.appendChild(modalRoot);
Modal.setAppElement("#yourAppElement");
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

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    description: "",
  });
  return (
    <div
      style={{
        border: "1px solid lightgray",
        borderRadius: "8px",
        color: "grey",
        padding: "20px",
      }}
    >
      {stageId === 1 && (
        <button onClick={() => open(true)}>New applicant</button>
      )}

      <p style={{ fontSize: "16px", fontWeight: "bold" }}>{stage?.title}</p>

      {applicantsB.map((applicant, index) => (
        <Item key={index} applicant={applicant} stageId={stageId} />
      ))}

      <Modal
        isOpen={opened}
        onRequestClose={() => open(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
        contentLabel="Add applicant"
      >
        <div>Add a new applicant</div>
        <br />
        <br />
        <form>
          <label htmlFor="firstname">First Name</label>
          <br />
          <input
            id="firstname"
            value={formData.first_name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, first_name: e.target.value }))
            }
          />

          <br />
          <br />

          <label htmlFor="lastname">Last Name</label>
          <br />
          <input
            id="lastname"
            value={formData.last_name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, last_name: e.target.value }))
            }
          />

          <br />
          <br />

          <label htmlFor="description">Description</label>
          <br />
          <textarea
            id="description"
            style={{ width: "100%" }}
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
          ></textarea>

          <br />
          <br />

          <button
            onClick={() => {
              // TODO: Fix: Click on button is refreshing the page on browser when clicked.
              dispatch({
                type: "loadNewApplicant",
                payload: {
                  // Generate a unique id
                  id: +new Date(),
                  current_stage_id: 1,
                  ...formData,
                },
              });
              open(false);
            }}
            style={{ width: "100%" }}
          >
            Save
          </button>
        </form>
      </Modal>
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
