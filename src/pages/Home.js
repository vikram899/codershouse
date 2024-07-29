import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Button } from "../components";
import {
  HOMEPAGE_BUTTON_SIGNIN,
  HOMEPAGE_BUTTON_TEXT,
  HOMEPAGE_PARA,
  HOMEPAGE_PRE_SIGNIN,
  HOMEPAGE_TITLE,
} from "../utils/strings";

const Home = () => {
  const navigate = useNavigate();

  const handleOnRegisterclick = () => {
    navigate("/register");
  };

  const handleOnLogin = () => {
    navigate("/login");
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
          <Link onClick={handleOnLogin} to="">
            {HOMEPAGE_BUTTON_SIGNIN}
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
