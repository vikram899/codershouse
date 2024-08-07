import React, { useRef } from "react";
import { useState } from "react";
import { createRoom } from "../http";
import { useNavigate } from "react-router-dom";

const StartRoomCard = (props) => {
  const [roomType, setRoomType] = useState("Open");
  const userInput = useRef();
  const navigate = useNavigate();

  const handleStartRoomClick = async () => {
    if (userInput.current.value === "") return;

    const { data } = await createRoom({
      roomType,
      roomName: userInput.current.value,
    });
    const { room } = data;
    console.log(room);
    navigate(`/room/${room._id}`);
  };

  return (
    <div className="flex justify-center align-middle fixed top-0 left-0 w-full h-full bg-black bg-opacity-60">
      <div className="w-1/2 max-w-96 bg-gray-800 h-1/2 my-auto p-4 rounded-lg">
        <div className="flex flex-col">
          <button {...props} className="flex justify-end">
            x
          </button>
          <p className="flex justify-center">Enter the topic to be discussed</p>
          <input
            className="bg-gray-700 mx-auto border-none my-4 py-0.5 px-2 text-m outline-none rounded-md"
            ref={userInput}
          />
        </div>
        <p className="flex justify-center">Room type</p>
        <div className="flex justify-between m-4 mt-6 ">
          <div
            onClick={() => {
              setRoomType("Open");
            }}
            className={`${
              roomType === "Open" ? "bg-gray-700" : ""
            } rounded-lg p-2 cursor-pointer`}
          >
            <img className="mx-2" src="/images/globe.png"></img>
            <span className="mx-5">Open</span>
          </div>
          <div
            onClick={() => {
              setRoomType("Social");
            }}
            className={`${
              roomType === "Social" ? "bg-gray-700" : ""
            } rounded-lg p-2 cursor-pointer`}
          >
            <img className="mx-2" src="/images/users.png"></img>
            <span className="mx-5">Social</span>
          </div>
          <div
            onClick={() => {
              setRoomType("Closed");
            }}
            className={`${
              roomType === "Closed" ? "bg-gray-700" : ""
            } rounded-lg p-2 cursor-pointer`}
          >
            <img className="mx-2" src="/images/closed-lock.png"></img>
            <span className="mx-3">Closed</span>
          </div>
        </div>
        <div className="flex flex-col m-12">
          <p className="mx-auto">Start a room, open to everyone</p>
          <button
            className="bg-green-700 rounded-lg p-2 px-4 m-4  hover:bg-green-600"
            onClick={handleStartRoomClick}
          >
            Start room
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartRoomCard;
