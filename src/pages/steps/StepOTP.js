import React from "react";
import { Button } from "../../components";
import { useDispatch } from "react-redux";
import { increment } from "../../redux/stepSlice";

const StepOTP = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(increment());
  };
  return (
    <div>
      StepOTP
      <Button onClick={handleOnClick}></Button>
    </div>
  );
};

export default StepOTP;
