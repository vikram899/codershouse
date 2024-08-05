import React, { useState } from "react";
import { Button, Card } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar } from "../../redux/activateSlice";
import { activate } from "../../http";
import { setAuth } from "../../redux/authSlice";

const StepAvatar = () => {
  const dispatch = useDispatch();
  const { name, avatar } = useSelector((state) => state.activate);
  const [image, setImage] = useState("/images/monkey-avatar.png");
  const [loading, setLoading] = useState(false);

  const handleButtonclick = async () => {
    setLoading(true);

    //Check input validation function
    if (!avatar || avatar.length === 0) {
      return;
    }

    try {
      const { data } = await activate({ name, avatar });
      const { isAuth } = data;
      if (isAuth) {
        dispatch(setAuth(data));
      }
    } catch (error) {
      console.log(error);
      return;
    } finally {
      setLoading(false);
    }
  };

  const getImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      dispatch(setAvatar(reader.result));
    };
  };

  return loading ? (
    "Loading"
  ) : (
    <div className="m-28">
      <Card title={`Welcome, ${name} !`} icon={"monkey"}>
        <p className="text-center text-sm text-gray-500 m-2">
          How's this photo?
        </p>
        <div className="w-28 h-28 border-blue-500 rounded-lg ">
          <img src={image} alt="Profile pic" />
        </div>
        <div className="my-2">
          <input
            onChange={getImage}
            className="hidden"
            id="avatarInput"
            type="file"
          ></input>
          <label className="cursor-pointer text-blue-500" htmlFor="avatarInput">
            Choose a different photo
          </label>
        </div>
        <div>
          <Button text="Next" onClick={handleButtonclick} />
        </div>
      </Card>
    </div>
  );
};

export default StepAvatar;
