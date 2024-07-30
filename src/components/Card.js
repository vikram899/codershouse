import React from "react";

const Card = ({title, icon, children}) => {
  return (
    <div className="w-2/4 mx-auto max-w-96 min-h-300 bg-gray-800 p-8 rounded-lg flex flex-col items-center justify-center">
      <div className="flex p-2">
        <img src={`/images/${icon}.png`} alt="title logo" />
        <h1 className="content-center mx-4 text-xl">{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default Card;
