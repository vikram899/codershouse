import React from "react";
import { Button } from "../../components";
import { useDispatch } from "react-redux";
import { increment } from "../../redux/stepSlice";

const StepName = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(increment());
  };
  return (
    <div>
      StepName
      <Button onClick={handleOnClick}></Button>
    </div>
  );
};

export default StepName;
