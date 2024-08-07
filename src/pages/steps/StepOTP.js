import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../redux/stepSlice";
import { Card, Button, TextInput } from "../../components";
import { verifyOTP } from "../../http";
import { setAuth } from "../../redux/authSlice";
import { Toaster } from "react-hot-toast";
import Toast from "../../utils/toast";

const StepOTP = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const { phone, hash } = useSelector((state) => state.auth.otp);

  const handleButtonclick = async () => {
    //Check input validation function
    if (inputRef.current.value.length !== 4) {
      Toast.errorToast("OTP should be of 4 digits");
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
      Toast.successToast("OTP verified successfully");
    } catch (error) {
      Toast.errorToast(error.response.data.message);
      return;
    }
  };
  return (
    <div className="m-28">
      <Toaster />
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
