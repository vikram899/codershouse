import React from "react";
import { Button, Phone, Email } from "../../components";
import { useDispatch } from "react-redux";
import { increment } from "../../redux/stepSlice";

const phoneEmailMap = {
  phone: Phone,
  email: Email,
};

const StepPhoneEmail = () => {
  const [type, setType] = React.useState("phone");

  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(increment());
  };
  return (
    <div>
      <div className="w-2/4 mt-28 mx-auto max-w-96 flex items-center justify-end">
        <button
          className={`bg-${type === "phone" ? "blue" : "gray"}-500 text-white font-bold py-1 px-1 rounded`}
          onClick={() => setType("phone")}
        >
          <img className="h-7" src="/images/phone_android.png" />
        </button>
        <button
          className={`bg-${type === "email" ? "blue" : "gray"}-500 text-white font-bold ml-2 py-2 px-2 rounded`}
          onClick={() => setType("email")}
        >
          <img className="h-5" src="/images/email_android.png" />
        </button>
      </div>
      <div className="mt-4">{React.createElement(phoneEmailMap[type])}</div>  
    </div>
  );
};

export default StepPhoneEmail;
