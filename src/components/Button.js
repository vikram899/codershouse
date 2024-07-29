import React from "react";

const Button = ({text, onClick}) => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
    
    onClick();

  };

  return (
    <button
      className={`flex bg-blue-500 rounded-3xl p-3 m-2 justify-center transition duration-300 ease-in-out hover:bg-blue-600 ${
        isClicked ? "scale-90" : ""
      }`}
      onClick={handleClick}
    >
      <span>{text}</span>
      <div className="flex">
        <img
          src="/images/arrow-forward.png"
          alt="arrow"
          className="mt-0.5 ml-2"
        ></img>
      </div>
    </button>
  );
};

export default Button;
