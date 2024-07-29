import React from "react";
import { useSelector } from "react-redux";
import { StepPhoneEmail, StepOTP } from "./steps";

const steps = {
  1: StepPhoneEmail,
  2: StepOTP,
};

const Authenticate = () => {
  const step = useSelector((state) => state.step.value);
  return <div>{React.createElement(steps[step])}</div>;
};

export default Authenticate;
