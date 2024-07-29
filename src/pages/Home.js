import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "../components";
import {
  HOMEPAGE_BUTTON_TEXT,
  HOMEPAGE_PARA,
  HOMEPAGE_PRE_SIGNIN,
  HOMEPAGE_TITLE,
} from "../utils/strings";

const Home = () => {
  const navigate = useNavigate();

  const handleOnRegisterclick = () => {
    navigate("/authenticate");
  };

  return (
    <div>
      <Card title={HOMEPAGE_TITLE} icon={"logo"}>
        <p className="p-2 m-2 text-center">{HOMEPAGE_PARA}</p>
        <div>
          <Button text={HOMEPAGE_BUTTON_TEXT} onClick={handleOnRegisterclick} />
        </div>
        <div className="mt-2  text-blue-500">
          <span className="mr-2">{HOMEPAGE_PRE_SIGNIN}</span>
        </div>
      </Card>
    </div>
  );
};

export default Home;
