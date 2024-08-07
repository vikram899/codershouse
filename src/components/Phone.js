import React, { useRef } from "react";
import { Card, Button, TextInput } from "../components";
import { useDispatch } from "react-redux";
import { increment } from "../redux/stepSlice";
import { NEXT_BUTTON_TEXT, PHONE_PARA, PHONE_TITLE } from "../utils/strings";
import { sendOTP } from "../http";
import { setOTP } from "../redux/authSlice";

const Phone = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const handleOnClick = async () => {
    //Check input validation function
    if (inputRef.current.value.length !== 10) {
      console.log("Invalid phone number");
      return;
    }

    try {
      const { data } = await sendOTP({ phone: "+91" + inputRef.current.value });
      const { phone, hash } = data;

      dispatch(setOTP({ phone, hash }));
      dispatch(increment());
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <div>
      <Card title={PHONE_TITLE} icon={"phone"} className="border-0">
        <TextInput inputRef={inputRef} />
        <div>
          <Button text={NEXT_BUTTON_TEXT} onClick={handleOnClick} />
        </div>
        <p className="text-center text-sm text-gray-500 mt-2">{PHONE_PARA}</p>
      </Card>
    </div>
  );
};

export default Phone;
