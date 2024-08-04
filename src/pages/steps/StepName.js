import React, { useRef, useState } from "react";
import { Button } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../redux/stepSlice";
import { Card, TextInput } from "../../components";
import { setName } from "../../redux/activateSlice";

const StepName = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.activate);
  const [fullname, setFullname] = useState(name);

  const handleButtonclick = async () => {
    dispatch(setName(inputRef.current.value));
    dispatch(increment());
  };

  const onChange = (e) => {
    setFullname(e.target.value);
  };
  return (
    <div className="m-28">
      <Card title="What's your ful name" icon={"smile"} className="border-0">
        <TextInput
          value={fullname}
          inputRef={inputRef}
          onChange={onChange}
        />
        <p className="text-center text-sm text-gray-500 m-2">
          Please use real names at codershouse
        </p>
        <div>
          <Button text="Next" onClick={handleButtonclick} />
        </div>
      </Card>
    </div>
  );
};

export default StepName;
