import React from "react";
import { Button } from "../../components";


const StepUsername = () => {
  const handleOnClick = () => {
    console.log("StepUsername");
  };
  return (
    <div>
      StepUsername
      <Button onClick={handleOnClick}></Button>
    </div>
  );
};

export default StepUsername;
