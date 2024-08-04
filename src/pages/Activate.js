import React from "react";
import { StepAvatar, StepName } from "./steps";
import { useSelector } from "react-redux";

const steps = {
  3: StepName,
  4: StepAvatar,
};

const Activate = () => {
  const step = useSelector((state) => state.step.value);
  return <div>{React.createElement(steps[step])}</div>;
};

export default Activate;
