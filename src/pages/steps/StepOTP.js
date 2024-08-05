import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../redux/stepSlice";
import { Card, Button, TextInput } from "../../components";
import { verifyOTP } from "../../http";
import { setAuth } from "../../redux/authSlice";

const StepOTP = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const { phone, hash } = useSelector((state) => state.auth.otp);

  const handleButtonclick = async () => {

    //Check input validation function
    if (inputRef.current.value.length !== 4) {
      return;
    }

    try {
      const { data } = await verifyOTP({
        otp: inputRef.current.value,
        phone,
        hash,
      });
  
      dispatch(setAuth(data));
      dispatch(increment());
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return (
    <div className="m-28">
      <Card title="Enter your OTP" icon={"lock"} className="border-0">
        <TextInput inputRef={inputRef} />
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
