import { ReduxState } from "../store/store";
import { useSelector } from "react-redux";

export const Applicants = ({ stageId }: { stageId: number }) => {
  const applicants = useSelector(({ applicants }: ReduxState) => {
    return {
      name: `${first_name} ${last_name}`,
    };
  });

  return <></>;
};

const Item = () => {
  return <></>;
};
