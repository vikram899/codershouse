import React from "react";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ room }) => {
  const { roomName, speakers } = room;
  const noOfUsers = speakers.length;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/room/${room._id}`);
      }}
      className="w-80 bg-slate-800 p-2 m-2 rounded-xl cursor-pointer"
    >
      <h3 className="my-2 flex justify-start">{roomName}</h3>
      <div className="flex justify-between">
        <div className="p-2">
          {speakers.map((speaker) => {
            const { avatar } = speaker;
            return (
              <div key={speaker.id}>
                <img
                  className="h-10 border-2 border-blue-500 rounded-full"
                  src={avatar}
                  alt="user2"
                />
              </div>
            );
          })}
        </div>
        <div className="p-2 my-auto">
          {speakers.map((speaker) => {
            const { name } = speaker;
            return (
              <div key={speaker.id}>
                <div className="flex px-2">
                  <span className="mx-2">{name}</span>
                  <img src="/images/message.png" alt="message" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end">
        <span className="mx-2 my-auto">{noOfUsers}</span>
        <img
          className="w-4 h-4 my-auto"
          src="/images/total-users.png"
          alt="total-users"
        />
      </div>
    </div>
  );
};

export default RoomCard;
