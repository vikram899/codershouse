import React from "react";
import { Card, Button, TextInput } from "../components";
import { useDispatch } from "react-redux";
import {increment} from "../redux/stepSlice";
import { NEXT_BUTTON_TEXT, PHONE_PARA, PHONE_TITLE } from "../utils/strings";

const Phone = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(increment());
  };

  return (
    <div>
      <Card title={PHONE_TITLE} icon={"phone"} className="border-0">
        <TextInput />
        <div>
          <Button text={NEXT_BUTTON_TEXT} onClick={handleOnClick} />
        </div>
        <p className="text-center text-sm text-gray-500 mt-2">
          {PHONE_PARA}
        </p>
      </Card>
    </div>
  );
};

export default Phone;
