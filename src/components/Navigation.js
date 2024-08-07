import React from "react";
import { Link } from "react-router-dom";
import { APP_NAME } from "../utils/strings";
import { logout } from "../http";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../redux/authSlice";
import { setToDefault } from "../redux/stepSlice";
import toast, { Toaster } from "react-hot-toast";
import Toast from "../utils/toast";

const Navigation = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      const { data } = await logout();
      dispatch(setAuth(data));
      dispatch(setToDefault());
      Toast.successToast("Logged out successfully");
    } catch (error) {
      Toast.errorToast(error.response.data.message);
    }
  };

  return (
    <div className="mx-auto w-3/4 flex justify-between">
      <Toaster />
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
          <div className="flex content-center">
            <h3 className="my-auto mx-2">{`Hi, ${user.name}`}</h3>
            <img
              src={user.avatar}
              alt="avatar"
              className="h-8 mx-4 w-8 my-auto border-2 border-blue-500 rounded-full"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-auto h-8 px-2 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
