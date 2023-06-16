import { Strength } from "../App";

const Status = ({ strength }: { strength: Strength }) => {
  const className = () => {
    switch (strength) {
      case Strength.Short:
        return "danger";
      case Strength.Weak:
        return "danger";
      case Strength.Medium:
        return "warning";
      case Strength.Hard:
        return "success";
    }
  };
  return <span className={`${className()} status`}>{strength}</span>;
};

export default Status;
