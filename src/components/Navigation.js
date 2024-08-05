import React from "react";
import { Link } from "react-router-dom";
import { APP_NAME } from "../utils/strings";
import { logout } from "../http";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../redux/authSlice";
import { setToDefault } from "../redux/stepSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const handleLogout = async () => {
    try {
      const { data } = await logout();
      dispatch(setAuth(data));
      dispatch(setToDefault());
    } catch (error) {
      console.error("Error while logging out", error);
    }
  };

  return (
    <div className="mx-auto w-3/4 flex justify-between">
      <div className="inline-block">
        <Link to="/" className="flex m-5">
          <img src="/images/logo.png" alt="logo" />
          <span className="mx-2 content-center text-2xl font-bold">
            {APP_NAME}
          </span>
        </Link>
      </div>
      <div className="flex">
        {user && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-auto h-8 px-2 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navigation;
