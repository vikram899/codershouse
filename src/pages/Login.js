import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StepPhoneEmail, StepOTP } from "./steps";

const steps = {
  1: StepPhoneEmail,
  2: StepOTP,
};

const Login = () => {
  return <div>Login</div>;
};

export default Login;
