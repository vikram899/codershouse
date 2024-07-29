import React from "react";
import { Button } from "../../components";
import { useDispatch } from "react-redux";
import { increment } from "../../redux/stepSlice";

const StepPhoneEmail = () => {
  const dispatch = useDispatch();
  
  const handleOnClick = () => {
    dispatch(increment());
  };
  return (
    <div>
      StepPhoneEmail
      <Button onClick={handleOnClick}></Button>
    </div>
  );
};

export default StepPhoneEmail;
