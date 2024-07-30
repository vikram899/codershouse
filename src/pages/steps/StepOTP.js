import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../redux/stepSlice";
import { Card, Button, TextInput } from "../../components";

const StepOTP = () => {
  const dispatch = useDispatch();
  const handleButtonclick = () => {
    dispatch(increment());
  };
  return (
    <div className="m-28">
      <Card title="Enter your OTP" icon={"lock"} className="border-0">
        <TextInput/>
        <p className="text-center text-sm text-gray-500 m-2">
          Didnt receive the OTP? Resend OTP
        </p>
        <div>
          <Button text="Next" onClick={handleButtonclick} />
        </div>
      </Card>
    </div>
  );
};

export default StepOTP;
