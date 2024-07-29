import React from "react";
import { Link } from "react-router-dom";
import { APP_NAME } from "../utils/strings";

const Navigation = () => {
  return (
    <div className="mx-auto w-3/4">
      <div className="inline-block">
        <Link to="/" className="flex m-5">
          <img src="/images/logo.png" alt="logo" />
          <span className="mx-2 content-center text-2xl font-bold">
            {APP_NAME}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
