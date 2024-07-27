import React from "react";
import { Link } from "react-router-dom";
import { APP_NAME } from "../utils/strings";

const Navigation = () => {
  return (
    <div>
      <Link to="/" className="flex m-5">
        <img src="/images/logo.png" alt="logo" />
        <span className="mx-2 content-center text-lg">{APP_NAME}</span>
      </Link>
    </div>
  );
};

export default Navigation;
