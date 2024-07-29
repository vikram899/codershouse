import React from "react";
import { Button } from "../../components";
import { useDispatch } from "react-redux";
import { increment } from "../../redux/stepSlice";

const StepAvatar = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(increment());
  };
  return (
    <div>
      Step Avatar
      <Button onClick={handleOnClick}></Button>
    </div>
  );
};

export default StepAvatar;
