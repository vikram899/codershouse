import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { StepPhoneEmail, StepOTP, StepName, StepAvatar, StepUsername } from "./steps";

const steps = {
  1: StepPhoneEmail,
  2: StepOTP,
  3: StepName,
  4: StepAvatar,
  5: StepUsername
}

const Register = () => {

  const step = useSelector(state => state.step.value);

  return <div>{React.createElement(steps[step])}</div>;
};

export default Register;
