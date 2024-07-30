import React from "react";
import { Card, Button, TextInput } from "../components";
import { useDispatch } from "react-redux";
import { increment } from "../redux/stepSlice";
import { EMAIL_PARA, EMAIL_TITLE, NEXT_BUTTON_TEXT } from "../utils/strings";

const Email = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(increment());
  };

  return (
    <div>
      <Card title={EMAIL_TITLE} icon={"email"}>
        <TextInput />
        <div>
          <Button text={NEXT_BUTTON_TEXT} onClick={handleOnClick} />
        </div>
        <p className="text-center text-sm text-gray-500 mt-2">{EMAIL_PARA}</p>
      </Card>
    </div>
  );
};

export default Email;
